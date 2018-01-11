"use strict";

const $ = require('jquery');
require('handlebars');
let factory = require('./factory');

$('#area1').click(function () {
    factory.getAttrData()
    .then((data) =>{
        data.forEach(element => {
            if (element.area_id === 1){
                $('#output').append(`<div><h4>${element.name}</h4><br><a class="test" href="#">description</a><div class="hidden">${element.description}<br>${element.times}</div></div>`);
            }
            
        });
    });
});

$(document).click (function(){
    console.log('hey',event);
    
if(event.target.className === "test"){
    $(event.target).next().slideToggle();
    
}

});
    
  





