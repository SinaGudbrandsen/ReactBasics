import React from 'react'
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
    render() {
   

        return (
        
            <div className="toDo" >
                <h1>Todays to dos</h1>
                <div className="ToDoList">

                <form onSubmit={this.addItem}> 
                    <input className="inputForm"
                     placeholder="Add a task"
                        ref={(a) => this._inputElement = a}/>
                       
                    <button type="submit"></button>
                </form>
                </div>

                <div>
                    <ToDoItems 
                    entries={this.state.items}
                    delete={this.deleteItem}/> 
                </div>  
            </div>
               

        )
    }
 
}



export default ToDoList