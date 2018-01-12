"use strict";

const $ = require('jquery');
require('handlebars');
let factory = require('./factory');

let attractionTime = [];
factory.getAttrData()
.then((data) => {
    for(let i = 0; i < data.length; i++) {  
        if (data[i].times !== undefined) {
            attractionTime.push(data[i]);
            console.log(data);
        }}
    });
        //console.log('new attraction array',attractionTime);

factory.getAreas()
.then ((areas) => {
    //console.log('areas working',areas);
});

factory.getAttTypes()
.then((type) => {
    //console.log("types working", type);
});

factory.getInfo()
.then((info) => {
    //console.log('info working', info);
});