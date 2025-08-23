import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ordered } from "../cake/cakeSlice";

type InitialState = {
    numOfIcecreams: number
}

const initialState : InitialState= {
    numOfIcecreams: 20
}
const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: (state)=>{
            state.numOfIcecreams--
        },
        restocked: ( state, action: PayloadAction<number> )=>{
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