import React from 'react'
import "./Clock.css"
import '../../../src/index.css'




class Clock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            day: new Date().getDate(),
            month: new Date().getMonth() + 1 ,
            year: new Date().getFullYear(),
            klokkeslett: new Date(),  
            sliderPositon: new Date().getHours() * 10 
        }

            
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          klokkeslett: new Date()
        });
      }
    

    render() {

    
        return (

            
          
            <div className ="ClockComponent">

    
            <h1 className="h1Date">Todays date</h1>
            <h1 className="Clock"> {this.state.day} / {this.state.month} / {this.state.year} </h1>
            <h1 className="h1Clock">Clock</h1>
            <h1 className="Timer"> {this.state.klokkeslett.toLocaleTimeString()}</h1>
            </div>
        
        )
    }
}



export default Clock