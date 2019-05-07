import React from 'react'
import ReactDOM from 'react-dom'
import add from '../../img/1x/add.png'
import './todo.css'
import ToDoItems from './ToDoItems'


class ToDoList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }


    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }

        this.setState((prevState) => {
            return {
                items: prevState.items.concat(newItem)
            }
        })    
        }   
        this._inputElement.value = ""  
        console.log(this.state.items) 
        e.preventDefault()  // do not reload
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item){
            return (item.key !== key)
        })
        this.setState({
            items: filteredItems
        })
    }

/*
    handleChange(event) {   

        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

*/
    render() {

        return (
        
            <div className="ToDoList">
                    <form onSubmit={this.addItem}> 
                        <input ref={(a) => this._inputElement = a}
                        placeholder="enter task"/>
                        <button type="submit">Legg til</button>
                    </form>

            <ToDoItems entries={this.state.items}
                        delete={this.deleteItem}/>   

                  
            </div>    

        )
    }
 
}



export default ToDoList