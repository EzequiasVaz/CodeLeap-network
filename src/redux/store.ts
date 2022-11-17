import { configureStore } from '@reduxjs/toolkit'
import userReducer from './setUser.action'
import postReducer from './postsControl.action'
import getPostsControlReducer from './getPostsControl.action'

const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer,
        getPostsControl: getPostsControlReducer
    },
})



export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store