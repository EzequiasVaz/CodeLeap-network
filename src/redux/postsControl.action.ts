import { createSlice } from "@reduxjs/toolkit";


export interface IPostControl {
    delete: boolean,
    update: boolean
}

const initialState: IPostControl = {
    delete: false,
    update: false
}

export const postSlice = createSlice({
    name: 'PostControl',
    initialState,
    reducers: {
        setPostDelete: (state, action) => {
            state.delete = action.payload
        },
        setPostUpdate: (state, action) => {
            state.update = action.payload
        },
    }
})


export const { setPostDelete, setPostUpdate } = postSlice.actions;
export default postSlice.reducer;