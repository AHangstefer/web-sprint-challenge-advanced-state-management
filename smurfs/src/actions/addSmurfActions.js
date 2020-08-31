import axios from 'axios';

export const NEW_SMURF_START = "NEW_SMURF_START";
export const NEW_SMURF_FAIL = "NEW_SMURF_FAIL";
export const NEW_SMURF_SUCCESS = "NEW_SMURF_SUCCESS"

export const addSmurfAction = () => dispatch => {
    dispatch({type: NEW_SMURF_START});
    axios
    .get(`http://localhost:3333/smurfs`)
    .then((res)=>{
    console.log("Here is your result: ", res);
    dispatch({type: NEW_SMURF_SUCCESS, payload: res.data})
    })
    .catch((err)=>{
        console.log("Well Shit, you've got an error ", err)
    })

    
};