'use strict';

const $ = require('jquery');
require('handlebars');
let factory = require('./factory');


let input = $('#input');
module.exports.searchMeOfficer= () => {
    input.keypress((e)=>{
        let search = input.val();
        let upperSearch = search.toUpperCase();
        let namesAndAreaIds= [];
        if(e.keyCode === 13){
            factory.getAttrData() 
            .then((data)=>{
                data.forEach((element)=>{
                    if(element.name.toUpperCase().includes(upperSearch)){
                        namesAndAreaIds.push(element);
                    }
                });
                namesAndAreaIds.forEach((areas)=>{
                    let areaHighlight = $(`#a${areas.area_id}`);
                    console.log('areas', areas.area_id );
                    
                    areaHighlight.css('border', '10px solid');
                });
            });
        }
    });
};