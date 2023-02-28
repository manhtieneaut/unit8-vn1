
import React from 'react';
import { useMemo,useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteItem, removeUserItem } from '../actions';

export const UserTable = () => {
    const [filter, setFilter] = useState('');

    const userList = useSelector((state) => state.manageUser.users)
    const dispatch = useDispatch();
    const parseTodo = useMemo(() => {
        return userList.filter((item) => {
            if (!filter) {
                return true
            }
            return item.status === filter;
        })
    }, [userList, filter])

    const filterList = (type) => {
        setFilter(type)
    }

    const handleFavoriteUser = (id) => {
        dispatch(addFavoriteItem(id))
    }
    const handleRemoveUser = (userId) => {
        dispatch(removeUserItem(userId))
    }

    return (
        <div>
            <div>
                <button onClick={() => { filterList('') }}>Phone list</button>
                <button onClick={() => { filterList('favorite') }}>Favorite list</button>
            </div>

            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Number phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parseTodo && parseTodo.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.info}</td>
                                    <td>{user.Phone}</td>
                                    <td>
                                        <button onClick={() => { handleRemoveUser(user.id) }}>Delete</button>
                                        <button onClick={() => { handleFavoriteUser(user.id) }}>Favorite</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

        </div>

    )
}