'use strict';

const $ = require('jquery');
const moment = require('moment');
const factory = require('./factory');
const attrHBS = require('../templates/attractions.hbs');
// module.exports.getCurrentAttr = () => {
//     let attractions = factory.getAttrData();
//     let timeAttr = attractions.filter(attraction =>  {
//         if (attraction.hasOwnProperty('times')) {
//             return attraction;
//         }
//     });
//     console.log("time attr:", timeAttr);
// }; 

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
                $('#output').append(attrHBS(attraction));
                return attraction;
            }
        });
        return attrFilter;
    });
    };
module.exports.timeCon = () => {
    console.log(attrFilter);
};