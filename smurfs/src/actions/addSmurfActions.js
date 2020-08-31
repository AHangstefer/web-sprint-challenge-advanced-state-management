import axios from 'axios';

export const NEW_SMURF_START = "NEW_SMURF_START";
export const NEW_SMURF_FAIL = "NEW_SMURF_FAIL";
export const NEW_SMURF_SUCCESS = "NEW_SMURF_SUCCESS"
// export const UPDATE_NAME = "UPDATE_NAME";
// export const UPDATE_AGE = "UPDATE_AGE";
// export const UPDATE_HEIGHT = "UPDATE_HEIGHT";

// export const updateName = (newName) => {
//     return {type: UPDATE_NAME, payload: newName};
// };

// export const updateAge = (newAge) => {
//     return {type: UPDATE_AGE, payload: newAge};
// };

// export const updateHeight = (newHeight) => {
//     return {type: UPDATE_HEIGHT, payload: newHeight};
// };

// // const headers = {
// //     Accept: "application/json"
// // }
// // {headers: headers}

export const addSmurfAction = () => dispatch => {
    dispatch({type: NEW_SMURF_START});
    axios
    .get(`http://localhost:3333/smurfs`)
    .then((res)=>{
    console.log("Here is your result: ", res);
    dispatch({type: NEW_SMURF_SUCCESS, payload: res.data})
    })
    .catch((err)=>{
        console.log("Well Shit, you've got an error ", err);
        dispatch({type:NEW_SMURF_FAIL, payload: err})
     })

    
};