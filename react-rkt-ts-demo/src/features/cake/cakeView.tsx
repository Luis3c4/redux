import {useAppSelector, useAppDispatch} from "../../app/hooks"
import { ordered, restocked } from "./cakeSlice";

function CakeView() {
    const numOfCakes = useAppSelector((state)=> state.cake.numOfCakes)
    const dispatch = useAppDispatch();
    return ( 
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={()=>dispatch(ordered())}>Order cake</button>
            <button onClick={()=>dispatch(restocked(5))}>Restore cakes</button>
        </div>
     );
}

export default CakeView;