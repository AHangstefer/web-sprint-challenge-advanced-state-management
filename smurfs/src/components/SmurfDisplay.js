import React, {useContext} from "react";
import {useSelector} from "react-redux";
import smurfContext from "./context/smurfContext"
import { initialState } from "../reducers/addSmurf";


const SmurfDisplay = () => {
    const smurfsData = useContext(smurfContext);
    const smurfs= smurfsData.smurfs
    console.log(smurfs);

    return (
        <section className="smurfs">

            
              {smurfs.map(i => (
                <div className= "individual" key = {i.name} >
                    <strong>{i.name}</strong>
                </div>
        ))}
            
              
        </section>
    );
};

export default SmurfDisplay;


//     <section className="smurfs">
//       {.map((s) => (
//         <div className="smurf" key={s.name}>
// //           <strong>{s.name}</strong>
// //         </div>
//       ))}
//     </section>