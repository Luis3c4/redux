import { store } from "./app/store.js"; 
import { ordered, restocked } from "./features/cake/cakeSlice.js";
import { icecreamOrdered, icecreamRestocked } from "./features/icecream/iceCream.js";
import { fetchUsers } from "./features/user/userSlice.js";

console.log("initial state", store.getState())
store.subscribe(()=>{
})
store.dispatch(fetchUsers())
// store.dispatch(ordered())
// store.dispatch(ordered())
// store.dispatch(ordered())
// store.dispatch(ordered())
// store.dispatch(restocked(5))

// store.dispatch(icecreamOrdered())
// store.dispatch(icecreamOrdered())
// store.dispatch(icecreamOrdered())
// store.dispatch(icecreamOrdered())
// store.dispatch(icecreamRestocked(5))
