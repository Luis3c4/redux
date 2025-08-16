const redux = require("redux");
function orderCake() {
  return {
    type: "CAKE_ORDERED",
    payload: 1,
  };
}
function restoreCake(qty = 1) {
  return {
    type: "CAKE_RESTORED",
    payload: qty,
  };
}
function orderIceCream() {
  return {
    type: "ICECREAM_ORDERED",
    payload: 1,
  };
}
function restoreIceCream(qty = 1) {
  return {
    type: "ICECREAM_RESTORED",
    payload: qty,
  };
}
const initialCakeState = {
  numOfCakes: 10,

};
const initialIceState = {
  numOfIceCreams: 20,
}
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "CAKE_ORDERED":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case "CAKE_RESTORED":
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};
const IceReducer = (state = initialIceState, action) => {
  switch (action.type) {
    case "ICECREAM_ORDERED":
      return {
        ...state,
        numOfCakes: state.numOfIceCreams - 1,
      };
    case "ICECREAM_RESTORED":
      return {
        ...state,
        numOfCakes: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};
const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: IceReducer,
})
const store = redux.createStore(rootReducer);
console.log("initial statre", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restoreCake(3));
unsubscribe();
