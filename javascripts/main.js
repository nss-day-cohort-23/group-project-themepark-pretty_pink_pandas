"use strict";

const $ = require('jquery');
var moment = require('moment');
require('handlebars');
let factory = require('./factory');
let controller = require('./controller');
let view = require('./view');
let timeNow = moment().format("hh:mmA");
console.log(timeNow);
