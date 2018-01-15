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
                attractionTime.push(data[i]);
            }}
        let attrFilter = attractionTime.filter(attraction => {
            if (attraction.hasOwnProperty("times")){
                return attraction;
            }
        });
        console.log("test", attrFilter);
        
    });
    };

