import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    nunOfCakes : 20,
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state)=>{
            state.nunOfCakes--
        },
        restocked: (state, action)=>{
            state.nunOfCakes += action.payload
        }
    },
})
export const { ordered, restocked } = cakeSlice.actions
export default cakeSlice.reducer;