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
        this.deleteItem = this.deleteItem.bind(this)
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

deleteItem(key) {
    var filteredItems = this.state.notes.filter(function (notes){
        return (notes.key !== key)
    })
    this.setState({
        notes: filteredItems
    })

}


render() {
    return(
        <div className="NotesStyle">
        <h1>Todays notes</h1>
            <div className="textAreaForm">
                <form onSubmit = {this.addNotes}>    
                    <input ref={(a) => this._inputElement = a}
                    className="NotesTextArea" type="textarea" 
                    placeholder="Legg til notat"></input>
                    <button></button>
                </form>
            </div>
        <Notes entries={this.state.notes}
         delete={this.deleteItem}/> 
        </div>
    )
  } 
}

export default NotesElement