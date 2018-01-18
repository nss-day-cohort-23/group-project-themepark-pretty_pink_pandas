'use strict';

const $ = require('jquery');
require('handlebars');
let factory = require('./factory');
let attrHBS = require('../templates/attractions.hbs');
let controller = require('./controller');


// function to search events and attractions
let input = $('#input');
module.exports.searchMeOfficer= () => {
    input.keypress((e)=>{
        let search = input.val();
        let upperSearch = search.toUpperCase();
        let matchingData= [];
        // when enter is hit get the data
        if(e.keyCode === 13){
            controller.getType() 
            .then((data)=>{
                // loop through data and get just the list of attraction objects
                data.forEach((element)=>{
                    // if the attraction name includes what was in the search parameters, push to new array
                    if(element.name.toUpperCase().includes(upperSearch)){
                        matchingData.push(element);
                    }
                });
                // loop through matching data and apply border to matching areas as well as output attractions to DOM
                matchingData.forEach((areas)=>{
                    let areaHighlight = $(`#a${areas.area_id}`);
                    areaHighlight.css('border', '10px solid');
                    $('#output').empty();
                    $('#output').append(attrHBS(areas));
                });
            });
        }
    });
};