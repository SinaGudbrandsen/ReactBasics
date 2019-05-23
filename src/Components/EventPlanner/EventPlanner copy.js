import React from 'react'
import './EventPlanner.css'
import AddButton from '../../img/1x/AddButton.png'
import { tsImportEqualsDeclaration } from '@babel/types';

import Events from '../EventPlanner/EventList'




class EventPlannerTwo extends React.Component{

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
                key: Date.now(), 
                startTime: this._startTimeElement.value, 
                endTime: this._endTimeElement.value, 
                ids: parseInt(this._startTimeElement.value)
            }

        this.setState((prevState) => {
            return {
                items: prevState.items.concat(newItem)
            } 
        })   
      
    }
        this._inputElement.value = "" 
        this._endTimeElement.value = ""
        this._startTimeElement.value = "" 
    
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

            <div className="eventPlannerComponent">
                <h1 className="h1Planner">Your events for the day</h1>

        
                <div className="addEventWindow" >

                    <form onSubmit={this.addItem} > 

                    <input type="text" autoComplete="off" placeholder="Add new event" 

                        ref={(a) => this._inputElement = a} /> 
            
                            <div className="selectTime">
                            <h1 className="h1Start">Start at: </h1>

                            <select  className="selectStart" ref={(a) => this._startTimeElement = a} >
                            


                                <option value="06.00">06.00</option> <option value="06.30">06.30</option> <option value="07.00">07.00</option>
                                <option value="07.30">07.30</option> <option value="08.00">08.00</option> <option value="08.30">08.30</option>
                                <option value="09.00">09.00</option> <option value="09.30">09.30</option> <option value="10.00">10.00</option>
                                <option value="10.30">10.30</option> <option value="11.00">11.00</option> <option value="11.30">11.30</option>
                                <option value="12.00">12.00</option> <option value="12.30">12.30</option> <option value="13.00">13.00</option>
                                <option value="13.30">13.30</option> <option value="14.00">14.00</option> <option value="14.30">14.30</option>
                                <option value="15.00">15.00</option> <option value="15.30">15.30</option> <option value="15.30">15.30</option>
                                <option value="16.00">16.00</option> <option value="16.30">16.30</option> <option value="17.00">17.00</option>
                                <option value="17.30">17.30</option> <option value="18.00">18.00</option> <option value="18.30">18.30</option>
                                <option value="19.00">19.00</option> <option value="19.30">19.30</option> <option value="20.00">20.00</option>
                                <option value="20.30">20.30</option> <option value="21.00">21.00</option> <option value="21.30">21.30</option>  
                                </select>
                            
                            <h1 className="h1Ends">Ends at: </h1>  

                            <select className="selectEnd" ref={(a) => this._endTimeElement = a} >
                                
                                <option value="06.00">06.00</option> <option value="06.30">06.30</option> <option value="07.00">07.00</option>
                                <option value="07.30">07.30</option> <option value="08.00">08.00</option> <option value="08.30">08.30</option>
                                <option value="09.00">09.00</option> <option value="09.30">09.30</option> <option value="10.00">10.00</option>
                                <option value="10.30">10.30</option> <option value="11.00">11.00</option> <option value="11.30">11.30</option>
                                <option value="12.00">12.00</option> <option value="12.30">12.30</option> <option value="13.00">13.00</option>
                                <option value="13.30">13.30</option> <option value="14.00">14.00</option> <option value="14.30">14.30</option>
                                <option value="15.00">15.00</option> <option value="15.30">15.30</option> <option value="15.30">15.30</option>
                                <option value="16.00">16.00</option> <option value="16.30">16.30</option> <option value="17.00">17.00</option>
                                <option value="17.30">17.30</option> <option value="18.00">18.00</option> <option value="18.30">18.30</option>
                                <option value="19.00">19.00</option> <option value="19.30">19.30</option> <option value="20.00">20.00</option>
                                <option value="20.30">20.30</option> <option value="21.00">21.00</option> <option value="21.30">21.30</option> </select>
                            </div>

                        <button  type="submit" className="saveEventButton">Save</button>
                    </form>
                 </div>    

                <Events entries={this.state.items}
                delete={this.deleteItem} />

        
                    <div className="timeLine"> 

                   
                    </div>
            </div>   
    
        
        )
    }
 
}


export default EventPlannerTwo