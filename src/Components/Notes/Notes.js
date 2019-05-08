import React from 'react'
import './Notes.css'
import Notes from './NotesComp'

class NotesElement extends React.Component {
    constructor() {
        super()

        this.state= {
            notes: []
        }

        this.addNotes = this.addNotes.bind(this)
    }



addNotes(e) {
    if (this._inputElement.value !== "") {
        var newNote = {
            text: this._inputElement.value,
            key: Date.now()
        }

    this.setState((prevState) => {
        return {
            notes: prevState.notes.concat(newNote)
        }
    })    
    }   
    this._inputElement.value = ""  
    console.log(this.state.notes) 
    e.preventDefault()  // do not reload
}    

render() {
    return(
        <div className="NotesStyle">
        <div>
                <form onSubmit = {this.addNotes}>    
                    <input ref={(a) => this._inputElement = a}
                    className="NotesTextArea" type="textarea"></input>
                    <button>Legg til notat </button>
                </form>
        </div>
        <Notes entries={this.state.notes}/> 
        </div>
    )
  } 
}

export default NotesElement