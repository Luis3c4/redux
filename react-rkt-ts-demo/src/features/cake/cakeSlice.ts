import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    numOfCakes: number
}

const initialState: InitialState = {
    numOfCakes : 20,
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state)=>{
            state.numOfCakes--
        },
        restocked: (state, action : PayloadAction<number>)=>{
            state.numOfCakes += action.payload
        }
    },
})
export const { ordered, restocked } = cakeSlice.actions
export default cakeSlice.reducer;