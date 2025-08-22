import { useDispatch, useSelector } from "react-redux";
import { icecreamOrdered, icecreamRestocked } from "./iceCream";
import { useState } from "react";
function IceceamView() {
  const numOfIcecreams = useSelector((state) => state.ice.numOfIcecreams);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  return (
    <div>
      <h2>Number of icecream - {numOfIcecreams} </h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />

      <button onClick={() => dispatch(icecreamOrdered())}>
        Order icecream
      </button>
      <button onClick={() => dispatch(icecreamRestocked(value))}>
        Restore icecream
      </button>
    </div>
  );
}

export default IceceamView;
