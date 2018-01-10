"use strict";

const $ = require('jquery');
var moment = require('moment');
require('handlebars');
let factory = require('./factory');
let timeNow = moment().format("HH:mm");

let attractions = [];
 factory.getData()
    .then((data) => {
        for(let i = 0; i < data.length; i++) {  
                   if (data[i].times !== undefined) {
                       console.log("working", data[i].times);
                 }}});
                
