import React from 'react'
import './message.css'

class Message extends React.Component {

    constructor() {
        super()

        this.message = this.message.bind(this)

        this.state = {

            time: new Date().getHours(), 
            message: ""

        }

  
    }

    message() {

        if ( this.state.time > 5  && this.state.time < 12 ) {
            return (<h1>Good morning</h1>) 
        }
        else if ( this.state.time > 11 && this.state.time < 17 ) {
            return (<h1>Good evening</h1>) 
        }
        else if ( this.state.time > 17 && this.state.time < 21  ) {
            return (<h1>Good afternoon</h1>) 
        }
        else if ( this.state.time > 20 ) {
            return (<h1>Good night</h1>) 
        }
    
      }

render() {
    return(
        
        <div className="message">    
        {this.message() } 
        </div> 
    )
}

}

export default Message