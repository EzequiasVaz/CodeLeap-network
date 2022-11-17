import { createSlice } from "@reduxjs/toolkit";


export interface IUser {
    username: string
}

const initialState: IUser = {
    username: '',
}

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setAuthUsername: (state, action) => {
            state.username = action.payload
        },
        setLocalStorageUsername: (state, action) => {
            localStorage.setItem("username", JSON.stringify(state.username))
        },
        setRemoveUsername: (state) => {
            state.username = ''
            localStorage.clear()
            localStorage.removeItem("username")
        }
    }
})


export const { setAuthUsername, setLocalStorageUsername, setRemoveUsername } = userSlice.actions;
export default userSlice.reducer;