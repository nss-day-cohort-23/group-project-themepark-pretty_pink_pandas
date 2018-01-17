"use strict";

const $ = require('jquery');
require('handlebars');
let factory = require('./factory');
let attrHBS = require('../templates/attractions.hbs');
let footerHBS = require('../templates/footer.hbs');
let moment = require('moment');


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



let input = $('#input');

function searchMeOfficer(){
    input.keypress((e)=>{
        let search = input.val();
        let upperSearch = search.toUpperCase();
        let resultArr = [];
        if(e.keyCode === 13){
            factory.getAttrData() 
            .then((data)=>{
                data.forEach((element)=>{
                    let attrUppercase = element.name.toUpperCase();
                    let areaId = element.area_id;
                    for(let i = 0; i < upperSearch.length; i++){
                        resultArr.push(upperSearch);
                        if(resultArr.indexOf(attrUppercase < -1)){
                            console.log(attrUppercase);
                        }
                    }
                });
            });
        }
    });
}

searchMeOfficer();

let arr = ['c','d','b'];
let test = 'cba';
let testArray = [];
for(let i = 0; i < test.length;i ++){
    testArray.push(test[i]);
}
if(testArray.indexOf(arr<-1)){
    console.log(testArray);
}

// this function sets the date data from moments into an obj so that it can be used in a HBS template
module.exports.copyrightFooter = () => {
    let copyrightDate = {
        "year": moment().format("YYYY"),
        "date": moment().format("MMM Do, YYYY")
    };
    $("#footer").append(footerHBS(copyrightDate));
};
