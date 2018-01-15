"use strict";

const $ = require('jquery');
let moment = require('moment');
require('handlebars');
let factory = require('./factory');
let controller = require('./controller');
let view = require('./view');
let timeLoad = require('./timeLoad');

let timeNow = moment().format("hh:mmA");
console.log(timeNow);

// on load set hex value as color for corresponding area
$(document).ready(()=>{
    factory.getAreas()
    .then((data)=>{
        data.forEach(element=>{
            let areaDiv = $(`#area${element.id}`);
            console.log(areaDiv);
            areaDiv.css('background', `#${element.colorTheme}`);
        });
    });
});

// on load, HBS loads copyright year and current date
view.copyrightFooter();
timeLoad.timeLoad();