import {} from "../actions/addSmurfActions"


export const initialState = {
    
        name: '',
        age: '',
        height: '',
        //id: 
};

const addSmurf = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    };
};

export default addSmurf;