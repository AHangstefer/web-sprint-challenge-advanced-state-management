import React from "react";

// name: 'Brainey',
// age: 200,
// height: '5cm',
// id: 0

export default function SmurfForm() {

    return (
        <form onSubmit={null}>
            <h2>Add New Smurf</h2>
            <input
                type="text"
                placeholder="name"
                id="name"
                name="name"
                value={null}
                onChange={null}
                />
            <input
                type="text"
                placeholder="age"
                id = "age"
                name="age"
                value={null}
                onChange={null}
                />
            <input  
                type="text"
                placeholder="height"
                id = "height"
                name="height"
                value={null}
                onChange={null}
                />
            <button onClick={null}>Add Smurf!</button>
            




        </form>
    )
}