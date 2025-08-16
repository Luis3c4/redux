const redux = require("redux");

const initialState = {
    name: "vishwas",
    address: {
        street : "123 main ST",
        city: "Boston",
        state: "MA"
    }
}
const updateStreet = (street)=>{
    return {
        type: "UPDATE_STREET",
        payload: street,
    }
}
const reducer = (state= initialState, action)=>{
    switch (action.type) {
        case "UPDATE_STREET":
            return {
                ...state,
                address: {
                    ...state.address,
                    street: action.payload
                }
            }
        default:
            return state;
    }
}
const store = redux.createStore(reducer);