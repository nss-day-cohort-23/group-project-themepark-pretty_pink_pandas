"use strict";

const $ = require('jquery');
require('handlebars');
let factory = require('./factory');
let attrHBS = require('../templates/attractions.hbs');

const getType = (attraction, arrOfTypes) => {
    for (let i=0; i < arrOfTypes.length; i++) {
        if (attraction.type_id === arrOfTypes[i].id) {
            return arrOfTypes[i].name;
        }
    }
};

$('.area').click(function () {
    $('#output').empty();
    console.log(event);
    console.log(event.target.id);
    let theIdINeed = event.target.id;

    let p1 = factory.getAttrData();
    let p2 = factory.getAttTypes();
    Promise.all([p1,p2])
    .then((data) =>{ console.log(data);
        data[0].forEach(attraction => {
            if ('a'+attraction.area_id === theIdINeed){
                attraction.type = getType(attraction, data[1]);
                $('#output').append(attrHBS(attraction));
            }
            
        });
    });
});

$(document).on( 'click', ' .accordion h4', function() {
    let isOpen = $(this).next( 'div').is(':visible');
    $( ' .accordion h4 + div' ).slideUp();
    if ( ! isOpen ) {
      $( this ).next().stop().slideDown();
    } 
  });







