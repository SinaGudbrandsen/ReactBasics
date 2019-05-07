import React from 'react'
import ReactDOM from 'react-dom'
import "./Clock.css"



class Clock extends React.Component {
    constructor() {
        super()

        this.state = {
            day: new Date().getDate(),
            month: new Date().getMonth() + 1 ,
            year: new Date().getFullYear(),
            klokkeslett: new Date()
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
        return(
            <div>
            <h1 className="Clock"> {this.state.day} / {this.state.month} / {this.state.year} </h1>
            <h1 className="Timer"> Klokken er  {this.state.klokkeslett.toLocaleTimeString()}</h1>
            </div>
        
        )
    }
}



export default Clock