import React, {Component}  from 'react'
import './todo.css'


class ToDoItems extends Component {
    constructor(props) {
        super(props)

        this.createTasks = this.createTasks.bind(this)

    }
    createTasks(item) {

        return <li onClick= {() => this.delete(item.key)}
        key={item.key}>{item.text}</li>

    }

    delete(key) {
        this.props.delete(key)
    }
    
    render() {
        var todoEntries = this.props.entries
        var listItems = todoEntries.map(this.createTasks)


        return (
            <ul className="theList" style={{width: '400px'}}>
                {listItems}
            </ul>
        )
    }
}

export default ToDoItems

