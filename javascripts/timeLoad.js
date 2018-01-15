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
            } else {
                attractionTime.push(data[i]);
            }
        }
        console.log("attr LengTH!", attractionTime.length);
        attractionTime.forEach(attraction => {
                $('#output').append(attrHBS(attraction));
            }
        );
        
    });
    };

let timeComparison = (attractionTimeArray) => {
    let currentHour = moment().format("h");
    let amPm = moment().format("A");
    for (let i=0; i < attractionTimeArray.length; i++) {
        let splitArray = attractionTimeArray[i].split(":");
        if (currentHour === splitArray[0] && splitArray[1].includes(amPm)) {
            return true;
        }
    }

    return false;

};
