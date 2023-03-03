import React, {Component, components} from "react";

class Message extends Component{
    constructor(){
         super()
        this.state = {
           message: 'Welcome visitors'
        }
    }

changeMessage(){
    console.log(this.message)
     this.setState =({
       message: 'thank you'
})
console.log(this.message)
}

    render(){
        return(
            <div>
               <h1>{this.state.message}</h1>
               <button onClick={() => this.changeMessage()}> Subscribe </button>
            </div>
        )
    }
}

export default Message 