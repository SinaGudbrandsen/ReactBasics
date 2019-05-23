/*import React from 'react'
import './EventPlanner.css'
import AddButton from '../../img/1x/AddButton.png'
import { tsImportEqualsDeclaration } from '@babel/types';
import AddEvent from  '../../Components/AddEvent/AddEvent'



class EventPlanner extends React.Component {

    constructor(props) {
        super(props)

        this.state =  {

            newEvent: {

                eventName: '', 
                startTime: '' , 
                endTime: ''

            }
        }

        this.handleClick = this.handleClick.bind(this)
   
    }

    handleClick(event) {

        const {name, value} = event.target
            this.setState({
                [name]: value

            })
            
        event.preventDefault();
        this.state.newEvent = ""
        return <h1 className="Event">{this.state.value} </h1>
    }


    render() {


        return (


            <div className="eventPlannerComponent">
            <h1 className="h1Planner">Your events for the day</h1>

             <div className="addEventWindow" >



                    <form onSubmit={this.handleClick}> <input type="text" autoComplete="off"placeholder="Add new event" name="eventName"
                    value={this.props.eventName} onChange={this.handleClick}/>
            
                            <div className="selectTime">
                            <h1 className="h1Start">Start at: </h1>

                            <select  onChange={this.handleClick} className="selectStart" name="startTime" value={this.props.startTime}>
                            


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
                            <select onChange={this.handleClick}  className="selectEnd"    name="endTime"   value={this.props.endTime}>
                                
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

            <div className="timeSlider" >

                <h1 className="Event"> {this.state.eventName} {this.state.startTime} {this.state.endTime} </h1>
    
            </div>   
            
            <button className="addTaskButton"  onClick={this.handleClick}>
                <p>Add event</p>
                <img  className="addButton" src='../../img/1x/AddButton.png'/>
            </button> 

                    <div className="timeLine"> 
                    <div className="seperator"></div>
                    <p className="hours"> 06.00   07.00   08.00   09.00   10.00   11.00   12.00   13.00   14.00   15.00   16.00   17.00   18.00   19.00 </p>
                    </div>
            </div>   
    
        
        )
    }


}

export default EventPlanner*/