// Thực hành 2
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import { manageUserReducer } from './User/reducer'

export default configureStore({
    reducer: {
        counter: counterReducer,
        manageUser: manageUserReducer,
    },
})