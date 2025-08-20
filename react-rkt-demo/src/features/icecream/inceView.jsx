import { useDispatch, useSelector } from "react-redux";

function IceceamView() {
    const numOfIcecreams = useSelector((state)=>state.ice.numOfIcecreams)
    const dispatch = useDispatch();
    return ( 
        <div>
            <h2>Number of icecream - {numOfIcecreams} </h2>
            <button >Order icecream</button>
            <button >Restore icecream</button>
        </div>
     );
}

export default IceceamView;