import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authToken:null
}

const LocalStroge = createSlice({
    name:"AuthToken",
    initialState,
    reducers:{
        addToken:(state,action)=>{
            const token = action.payload.token
            state.authToken = token
        }
    }
})

export default LocalStroge.reducer
export const {addToken} = LocalStroge.actions