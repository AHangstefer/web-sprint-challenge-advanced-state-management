import React, {useContext} from "react";
import {useSelector} from "react-redux";
import smurfContext from "./context/smurfContext"


const SmurfDisplay = () => {
    const smurfs = useContext(smurfContext);

    return (
        <section className="smurfs">
              {smurfs.map((s) => (
                <div className="smurf" key={s.name}>
                 <strong>{s.name}</strong>
               </div>
              ))}
        </section>
    )
};

export default SmurfDisplay;


//     <section className="smurfs">
//       {.map((s) => (
//         <div className="smurf" key={s.name}>
// //           <strong>{s.name}</strong>
// //         </div>
//       ))}
//     </section>