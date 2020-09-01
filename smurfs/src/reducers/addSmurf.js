import {NEW_SMURF_FAIL,
     NEW_SMURF_SUCCESS, 
     NEW_SMURF_START, 
    //  UPDATE_AGE, 
    //  UPDATE_HEIGHT,
    //  UPDATE_NAME
    } from "../actions/addSmurfActions"


export const initialState = {
        name: '',
        age: '',
        height: '',
        loading: false
        //id: 
};

export const addSmurf = (state = initialState, action) => {
    switch(action.type){
        case NEW_SMURF_START:
            return{
                ...state,
                loading: true
            };
        case NEW_SMURF_SUCCESS:
            return{
                ...state,
                name: action.payload,
                age: action.payload,
                height: action.payload,
                loading: false
            };
        case NEW_SMURF_FAIL:
            return{
                ...state,
                loading:false
            };

        default:
            return state;
    };
};

