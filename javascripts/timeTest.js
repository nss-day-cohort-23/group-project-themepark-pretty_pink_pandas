'use strict';

const $ = require('jquery');
const moment = require('moment');
const factory = require('./factory');
const attrHBS = require('../templates/attractions.hbs');
const controller = require('./controller');



// a function to get attractions that have Event Times from our Attraction Data
//getting the data its self
let searchValueArray = [];
let finalAttractionsArray = [];
let timeSearch = document.getElementById("timeInput");
$('#timeBtn').click((e) => {
    searchValueArray.push(timeSearch.value);
    let timeSplit = searchValueArray[1].split(":");
    let hourSelected = timeSplit[0];
    let morningOrEvening = timeSplit[1];
    controller.getType()
    .then((data) => {
        for(let i = 0; i < data.length; i++) { 
            if (data[i].times !== undefined) {
                if (timeValueCheck(data[i].times)) {
                    finalAttractionsArray.push(data[i]);
                }
            else {
                finalAttractionsArray.push(data[i]);
            }
        }}
        finalAttractionsArray.forEach(attraction =>{
            $('#output').append(attrHBS(attraction));
            }
         );
        }
    );
});
 
    
    let timeValueCheck= (timesArray) => {
        let timeSplit = searchValueArray[1].split(":");
        let hourSelected = timeSplit[0];
        let morningOrEvening = timeSplit[1];

        for (let i=0; i < timesArray.length; i++) {
            let splitArray = timesArray[i].split(":");
            if (hourSelected === splitArray[0]){
                return true;
            }
        }
    
        return false;
    };
            
            
            
//     factory.getAttrData()
//     // looping over the data and pushing attractions that are open this current hour as well as all day
//             .then((data)=>{
//                 for(let i = 0; i < data.length; i++) {  
//                     //this function (line 36) runs a for loop over our data with "times" then pushes data that equals the current hour and AM / PM
//                     if (data[i].times !== undefined) {
//                         if (timesearchComparison(data[i].times)){
//                         timeTest.push(data[i]);
//                         }
//                     //this pushes all data that does not have a "times" property, IE, attractions open all day
//                         }
//                     }
                    
                    
//                 });
//         }   
//     });
// };


// let timeSplit =(time) =>{
//     let newTime =time.split(':');
//     let am_pm;
// if(newTime[0] >= 12){
//     newTime = (`${newTime[0] - 12} PM`);
//     am_pm = 'PM';
// } else{
//     newTime = (`${newTime[0]} AM`);
//     am_pm = 'AM';
// }
// };


// // our function to check for current hour and AM / PM
// let timesearchComparison = (attractionTimeArray) => {
//     // get current hour , 1-12
//     let inputTime = newTime;
//     // get am or pm
//     let inputAmPm = am_pm;
//     // loop over our array (line 19) and splits on each "times" string from the Firebase data.
//     for (let i=0; i < attractionTimeArray.length; i++) {
//         let splitArray = attractionTimeArray[i].split(":");
//         // checks to see if the current hour is equal to the first index of the split, and ALSO includes the current AM vs PM.
//         if (inputTime[0] === splitArray[0] && splitArray[1].includes(am_pm)) {
//             return true;
//         }
//     }

//     return false;

// };












