"use strict";

const $ = require('jquery');
require('handlebars');
let factory = require('./factory');

factory.getAttractionData()
.then((data) =>{
    console.log(data);
    });


