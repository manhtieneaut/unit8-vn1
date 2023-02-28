import { createAction } from "@reduxjs/toolkit";
// Giá trị khởi tạo
let nextId = 0;


//
export const getUserList = createAction('manageUser/getUserList');
//
export const addUserItem = createAction('manageUser/addUserItem', (userInfo,numberPhone)=>{
    nextId++
    return{
        payload:{
            info: userInfo,
            id:nextId,
            Phone:numberPhone,
            status: 'todo'
        }
    }
});
//

export const removeUserItem = createAction('manageUser/removeUserItem');
export const addFavoriteItem = createAction('manageUser/addFavoriteItem');

//