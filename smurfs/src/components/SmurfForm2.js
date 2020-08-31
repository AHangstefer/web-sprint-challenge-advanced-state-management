import React, {Component} from 'react';
import axios from "axios" 

class SmurfForm2 extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: "",
            age: "",
            height: ""
        
        }
    }

    ChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios
        .post(`http://localhost:3333/Smurfs`, this.state)
        .then((res)=>{
            console.log("adding your smurf!", res.data)
        })
        .catch((err)=> {
            console.log("well, shit! You've got an err :", err)
        })
    }


    render(){
        const {name, age, height} =this.state
        return(
            <div>
                <form onSubmit = {this.submitHandler}>
                    <div>
                        <input type = "text" 
                        name="name" 
                        placeholder="name" 
                        value = {name}
                        onChange = {this.ChangeHandler}>
                        </input>
                    </div>
                    <div>
                        <input type="text" 
                        name="age" 
                        placeholder="age" 
                        value= {age}
                        onChange = {this.ChangeHandler}>
                        </input>
                    </div>
                    <div>
                        <input type="text"
                         name="height" 
                         placeholder ="height" 
                         value={height}
                         onChange={this.ChangeHandler}>
                        </input>
                    </div>
                    <button type = "submit">Add Your Smurf</button>
                </form>

            </div>
        )
    }
}

export default SmurfForm2;