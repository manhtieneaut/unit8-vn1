import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserItem } from './actions';
import { UserTable } from './components/UserTable';



export const ManageUser = () => {
  const [inputName, setInputName] = useState('');
  const [inputNum, setInputNum] = useState('');

  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    const { value } = e.target;
    setInputName(value);
  }
  const handleChangeNum = (e) => {
    const { value } = e.target;
    setInputNum(value);
  }



  const handleSubmit = () => {
    if (inputName.length && inputNum.length > 0) {
      dispatch(addUserItem(inputName,inputNum));
      setInputName('');
      setInputNum('');
    }
  }
  return (
    <div style={{ padding: 20 }}>
      <div style={{ padding: 20, textAlign:"center" }}>
        <h1>DANH BẠ ĐIỆN THOẠI</h1>
        <input placeholder="Họ và tên" onChange={handleChangeName} value={inputName} />
        <input placeholder="Số điện thoại" onChange={handleChangeNum} value={inputNum} />
        <button onClick={handleSubmit}>Add</button>
      </div>
      <div>
        <UserTable />
      </div>
    </div>
  )
}
