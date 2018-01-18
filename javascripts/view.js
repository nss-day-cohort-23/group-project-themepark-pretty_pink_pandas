"use strict";

const $ = require('jquery');
require('handlebars');
let factory = require('./factory');
let attrHBS = require('../templates/attractions.hbs');
let footerHBS = require('../templates/footer.hbs');
let moment = require('moment');
let controller = require('./controller');

// on click, loads attraction data that has had type added to it already. Then loops over data and prints any attraction with area id that matches the area clicked.
$('.area').click(function () {
    $('#output').empty();
    let theIdINeed = event.target.id;
   
    controller.getType()
    .then((data) => {
        data.forEach(attraction => {
            if ('a'+attraction.area_id === theIdINeed){
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


// this function sets the date data from moments into an obj so that it can be used in a HBS template
module.exports.copyrightFooter = () => {
    let copyrightDate = {
        "year": moment().format("YYYY"),
        "date": moment().format("MMM Do, YYYY")
    };
    $("#footer").append(footerHBS(copyrightDate));
};
