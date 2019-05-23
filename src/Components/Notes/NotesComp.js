import React from 'react'
import './Notes'


class Notes extends React.Component {
    constructor() {
        super()
    
        this.createNotes = this.createNotes.bind(this)
    }

    createNotes(notes) {
            return <p  onClick= {() => this.delete(notes.key)} key={notes.key}>{notes.text} </p>
    }
      delete(key) {
        this.props.delete(key)
    }

    render() {
        var noteEntries = this.props.entries
        var noteItems = noteEntries.map(this.createNotes)

        return (
            <p className="theNotes">
                {noteItems}
           </p>
           )
    }
}

export default Notes