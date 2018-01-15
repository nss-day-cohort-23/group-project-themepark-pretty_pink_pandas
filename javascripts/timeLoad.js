'use strict';

const $ = require('jquery');
const moment = require('moment');
const factory = require('./factory');
const attrHBS = require('../templates/attractions.hbs');



let attractionTime = [];
module.exports.timeLoad = () =>{
    factory.getAttrData()
    .then((data) => {
        for(let i = 0; i < data.length; i++) {  
            if (data[i].times !== undefined) {
                if (timeComparison(data[i].times)) {
                    attractionTime.push(data[i]);
                }
            }
        }
        let attrFilter = attractionTime.filter(attraction => {
            if (attraction.hasOwnProperty("times")){
                $('#output').append(attrHBS(attraction));
            }
        });
        
    });
    };
// new function 
// use moments() to get split at the ":"
let timeComparison = (attractionTimeArray) => {
    let currentHour = moment().format("h");
    for (let i=0; i < attractionTimeArray.length; i++) {
        let hour = attractionTimeArray[i].split(":")[0];
        if (currentHour === hour) {
            return true;
        }
    }

    return false;

};
