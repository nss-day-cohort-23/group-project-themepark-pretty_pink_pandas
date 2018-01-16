'use strict';

const $ = require('jquery');
const moment = require('moment');
const factory = require('./factory');
const attrHBS = require('../templates/attractions.hbs');
const controller = require('./controller');

// a function to get attractions that have Event Times from our Attraction Data
let attractionTime = [];
module.exports.timeLoad = () =>{
    //getting the data from controller that has had types added
    controller.getType()
    // looping over the data and pushing attractions that are open this current hour as well as all day
    .then((data) => {
        for(let i = 0; i < data.length; i++) { 
            //this function (line 36) runs a for loop over our data with "times" then pushes data that equals the current hour and AM / PM
            if (data[i].times !== undefined) {
                if (timeComparison(data[i].times)) {
                    attractionTime.push(data[i]);
                }
            //this pushes all data that does not have a "times" property, IE, attractions open all day
            } else {
                attractionTime.push(data[i]);
            }
        }
        //loop over new array and appends it through the HBS template
        attractionTime.forEach(attraction => {
                $('#output').append(attrHBS(attraction));
            }
        );
        
    });
    };
// our function to check for current hour and AM / PM
let timeComparison = (attractionTimeArray) => {
    // get current hour , 1-12
    let currentHour = moment().format("h");
    // get am or pm
    let amPm = moment().format("A");
    // loop over our array (line 19) and splits on each "times" string from the Firebase data.
    for (let i=0; i < attractionTimeArray.length; i++) {
        let splitArray = attractionTimeArray[i].split(":");
        // checks to see if the current hour is equal to the first index of the split, and ALSO includes the current AM vs PM.
        if (currentHour === splitArray[0] && splitArray[1].includes(amPm)) {
            return true;
        }
    }

    return false;

};
