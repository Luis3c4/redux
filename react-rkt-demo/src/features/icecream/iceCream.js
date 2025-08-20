import { createSlice } from "@reduxjs/toolkit";
import { ordered } from "../cake/cakeSlice";

const initialState = {
    numOfIcecreams: 20
}
const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: (state)=>{
            state.numOfIcecreams--
        },
        restocked: ( state, action )=>{
            state.numOfIcecreams += action.payload
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(ordered, (state)=>{
            state.numOfIcecreams--
        })
    }
})
export const { ordered: icecreamOrdered, restocked: icecreamRestocked } = icecreamSlice.actions;
export default icecreamSlice.reducer;