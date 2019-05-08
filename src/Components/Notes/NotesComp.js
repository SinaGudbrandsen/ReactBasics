import React from 'react'
import './Notes'


class Notes extends React.Component {
    constructor() {
        super()
    
        this.createNotes = this.createNotes.bind(this)
    }

    createNotes(notes) {
            return <p key={notes.key}>{notes.text}</p>
    }

    render() {
        var noteEntries = this.props.entries
        var noteItems = noteEntries.map(this.createNotes)

        return (
            <p className="theList">
                {noteItems}
           </p>
           )
    }
}

export default Notes