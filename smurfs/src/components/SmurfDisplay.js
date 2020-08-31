import React from "react";
import {useSelector} from "react-react";


const SmurfDisplay = () => {
    const {name} = useSelector(state => state)

    return(
    <div className = "smurf">
        {name.map(smurf =>
            <h1>{smurf}</h1>)}
    </div>
    );
};