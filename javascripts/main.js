"use strict";

const $ = require('jquery');
var moment = require('moment');
require('handlebars');
let factory = require('./factory');
let timeNow = moment().format("HH");

factory.getData()
    .then((data) => {
    });

    console.log('time',timeNow);
