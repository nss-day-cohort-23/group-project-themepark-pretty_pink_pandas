"use strict";

const $ = require('jquery');
require('handlebars');
let factory = require('./factory');


        //console.log('new attraction array',attractionTime);

factory.getAreas()
.then ((areas) => {
    //console.log('areas working',areas);
});

factory.getAttTypes()
.then((type) => {
    console.log("types working", type);
});

factory.getInfo()
.then((info) => {
    //console.log('info working', info);
});