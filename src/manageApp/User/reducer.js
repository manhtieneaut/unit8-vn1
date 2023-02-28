import { createReducer } from "@reduxjs/toolkit";
import { addUserItem, removeUserItem,addFavoriteItem} from "./actions";


const initialState = {
    users: []
};

export const manageUserReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addUserItem, (state, action) => {
            state.users.push(action.payload);
        })
        .addCase(removeUserItem, (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
        })
        .addCase(addFavoriteItem, (state, action) => {
            const index = state.users.findIndex((value) => value.id === action.payload);
            if (index !== -1) {
                state.users[index].status = 'favorite'
            }
        })
        
        .addDefaultCase(() => {})
})
