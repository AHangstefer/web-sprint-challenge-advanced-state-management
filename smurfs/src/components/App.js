import React, {useState, useEffect} from "react";
import "./App.css";
import SmurfForm2 from "./SmurfForm2"
//import {addSmurf} from "../reducers/addSmurf"
import smurfContext from "./context/smurfContext"
import Axios from "axios";
import SmurfDisplay from "./SmurfDisplay"





function App() {

  
  let [smurfs, setSmurfs] = useState([]);
  

  const getSmurf = () => {
    Axios
    .get(`http://localhost:3333/smurfs`)
    .then((res)=>{
      console.log("Hey! Here's some smurfs", res.data);
      //smurfs.push(res.data);
       setSmurfs(res.data);
      
    })
    .catch((err)=>{
      console.log("well shit :", err)
    })
    
  }

    
  

  

  
  

  

  
    return (
      <div className="App">
        <smurfContext.Provider value = {{ smurfs , getSmurf}}>
          <h1>SMURFS! W/Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
          <SmurfForm2 /> 
          <SmurfDisplay />
          <button onClick = {getSmurf}>All the Smurfs!</button>
        </smurfContext.Provider>
      </div>
    );
  
};

export default App;
