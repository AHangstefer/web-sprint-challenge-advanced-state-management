// import React,{useState} from "react";
// import {UPDATE_NAME, UPDATE_AGE, UPDATE_HEIGHT, updateName, updateAge, updateHeight} from "../actions/addSmurfActions"
// // import smurfHooks from "../hooks/smurfHooks";
// import initialState from "../reducers/addSmurf"


    

// const SmurfForm =() => {

//  const formCallBack = () => {
//   console.log("This form callback")
//  };

//  const  [values, handleSubmit, handleChanges] = smurfHooks(initialState, formCallBack);

    // const [newName, setNewName] = useState("");
    // const [newAge, setNewAge] = useState("");
    // const [newHeight, setNewHeight] = useState("");

    // const handleNameChange = (e) => {
    //     console.log(e.target.value);
    //     setNewName(e.target.value)
    // };

    // const handleNewAge = (e) => {
    //     console.log(e.target.value);
    //     setNewAge(e.target.value);
    // };

    // const handleNewHeight = (e) => {
    //     console.log(e.target.value);
    //     setNewHeight(e.target.value)
    // };


//     const [value, setValue] =useState(initialState);

//     const handleNewValues = (e) => {
//         console.log(e.target.name, e.target.value);
//         setValue({
//             ...value ,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e)=> {
//         e.preventDefault();
//         alert(value)
//     }


//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Add New Smurf</h2>
//             <input
//                 type="text"
//                 placeholder="name"
//                 id="name"
//                 name="name"
//                 value={value.name}
//                 onChange={handleNewValues}
//                 />
//             <input
//                 type="text"
//                 placeholder="age"
//                 id = "age"
//                 name="age"
//                 value={value.age}
//                 onChange={handleNewValues}
//                 />
//             <input  
//                 type="text"
//                 placeholder="height"
//                 id = "height"
//                 name="height"
//                 value={value.height}
//                 onChange={handleNewValues}
//                 />
//             <button onClick={null}>Add Smurf!</button>
            




//         </form>
//     )
// };

// export default SmurfForm;