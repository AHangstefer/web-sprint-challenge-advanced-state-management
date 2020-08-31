// import {useLocalStorage} from "./useLocalStorage";


// const smurfHooks = (initialValues, cb) => {
//     const [values, setValues] =useLocalStorage("newSmurf", initialValues);

//     const handleChanges  = (e) => {
//         console.log(e.target.name, e.target.value);
//         setValues({
//         ...values,
//         [e.target.name]: e.target.value
//         });
//     };
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
       
//       };


    
//     return [values, handleSubmit, handleChanges]
// };

// export default smurfHooks;