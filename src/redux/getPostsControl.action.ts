import { createSlice } from "@reduxjs/toolkit";


export interface IGetPostsControl {
    page: number,
    reload: boolean,
}

const initialState: IGetPostsControl = {
    page: 1,
    reload: false,
}

export const postSlice = createSlice({
    name: 'GetPostsControl',
    initialState,
    reducers: {
        setPostsGetNewPage: (state, action) => {
            state.page = action.payload
        },
        setPostsReload: (state, action) => {
            state.reload = action.payload
        }
    }
})


export const { setPostsGetNewPage, setPostsReload } = postSlice.actions;
export default postSlice.reducer;