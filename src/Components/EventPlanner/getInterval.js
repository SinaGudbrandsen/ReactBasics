/*
Filen er ikke i bruk, men lar den være her slik at jeg kan se tilbake på denne senere


import React from 'react'



function createHalfHourIntervals(from, until){
    // ...
    var time = new Date(from);
    var intervals = []; // more clear name than hours
  
    for (var i = 0; i <= max; i++) {
      intervals.push(time);
      time.setMinutes(time.getMinutes() + 30);
    }

}
  
function formatDateHHcolonMM(date) {  // funny name but specific
    var hour = date.getHours();
    var minute = date.getMinutes();
    return doubleZeros(hour) + ":" + doubleZeros(minute);
}
  
  var intervals = createHalfHourIntervals()
    .map(formatDateHHcolonMM); // map will create a new array of formatted intervals from the array returned by createHalfHourIntervals


    

    ReactDOM.render(<createHalfHourIntervals />, document.getElementById("root"))    */