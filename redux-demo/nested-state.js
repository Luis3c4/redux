const redux = require("redux");
const produce = require("immer").produce;
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
            return produce(state,(draft)=>{
                draft.address.street = action.payload;
            } )
        default:
            return state;
    }
}
const store = redux.createStore(reducer);
console.log("initial state", store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log("update state", store.getState())
})
store.dispatch(updateStreet("456 main ST"));
unsubscribe();