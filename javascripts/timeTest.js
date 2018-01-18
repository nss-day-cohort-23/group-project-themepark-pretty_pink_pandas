'use strict';

const $ = require('jquery');
const moment = require('moment');
const factory = require('./factory');
const attrHBS = require('../templates/attractions.hbs');
let controller = require('./controller');




let timeTest = [];
let timesArray = [];
let timeSearch = document.getElementById("timeInput");
$('#timeBtn').on('click',((e) => {
    timeTest.push(timeSearch.value);
    let timeSplit = timeTest[0].split(":");
    let hourSelected = timeSplit[0];
    let morningOrEvening = timeSplit[0];
    $('#output').empty();
    controller.getType()
    .then((data) => {
        for(let i = 0; i < data.length; i++) { 
            if (data[i].times !== undefined) {
                if (timeValueCheck(data[i].times)) {
                    timesArray.push(data[i]);
                }
        }}
        timesArray.forEach(attraction =>{
            $('#output').append(attrHBS(attraction));
            console.log(attraction);
            }
         );
        }
    );
}));
 
    
    let timeValueCheck= (timesArray) => {
        let timeSplit = timeTest[0].split(":");
        let hourSelected = timeSplit[0];
        let morningOrEvening = timeSplit[0];
        for (let i=0; i < timesArray.length; i++) {
            let splitArray = timesArray[i].split(":");
            console.log("super", splitArray);
            if (hourSelected === splitArray[0]){
                console.log("mega",hourSelected, splitArray[0]);
                return true;
            }
        }
    
        return false;
    };











