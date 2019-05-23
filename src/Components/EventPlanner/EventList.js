import React from 'react'
import './EventPlanner.css'


class Events extends React.Component {

    CreateEvents(item) {

        const startTall = parseInt(item.startTime)
        const endTall = parseInt(item.endTime)
        console.log(startTall)
    
        return ( <div> <li className="eventItem" 
        onClick= {() => this.delete(item.key)}
        key={item.key}>{item.text}<br /> {item.startTime} - {item.endTime}</li>
        </div> )

    }

    delete(key) {
        this.props.delete(key)
    }
/*
    {transform: `translateX(${startTall*18}px)`} */

    render() {


        var entries = this.props.entries;
        var eventList = entries.map(this.CreateEvents);

        return ( 

            <div>

                <div className="row">

                            <div className= "row">
                        
                                <div id="column" key="7" ></div>
                                <div id="column" key="8" ></div>
                                <div id="column" key="9" ></div>
                                <div id="column" key="10" ></div>
                                <div id="column" key="11" ></div>
                                <div id="column" key="12"></div>
                                <div id="column" key="13" ></div>
                                <div id="column" key="14" ></div>
                                <div id="column" key="15" ></div>
                                <div id="column" key="16" ></div>
                                <div id="column" key="17" ></div>
                                <div id="column" key="18" ></div>
                                <div id="column" key="19" ></div>
                                <div id="column" key="20" ></div>
                                <div id="column" key="21"></div>

                    </div>  

                </div>
                  


            <div>

            <ul className="eventList">
            {eventList}
            </ul>


            </div>
            </div>
        )
}

}


export default Events