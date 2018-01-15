"use strict";

const $ = require('jquery');
require('handlebars');
let factory = require('./factory');
let attrHBS = require('../templates/attractions.hbs');
let footerHBS = require('../templates/footer.hbs');
let moment = require('moment');


$('#area1').click(function () {
    $('#output').empty();
    factory.getAttrData()
    .then((data) =>{
        data.forEach(element => {
            if (element.area_id === 1){
                $('#output').append(attrHBS(element));
            }
            
        });
    });
});

$('#area2').click(function () {
    $('#output').empty();
    factory.getAttrData()
    .then((data) =>{
        data.forEach(element => {
            if (element.area_id === 2){
                $('#output').append(attrHBS(element));            }
            
        });
    });
});

$('#area3').click(function () {
    $('#output').empty();
    factory.getAttrData()
    .then((data) =>{
        data.forEach(element => {
            if (element.area_id === 3){
                $('#output').append(attrHBS(element));           
            }
            
        });
    });
});

$('#area4').click(function () {
    $('#output').empty();
    factory.getAttrData()
    .then((data) =>{
        data.forEach(element => {
            if (element.area_id === 4){
                $('#output').append(attrHBS(element));            }
            
        });
    });
});

$('#area5').click(function () {
    $('#output').empty();
    factory.getAttrData()
    .then((data) =>{
        data.forEach(element => {
            if (element.area_id === 5){
                $('#output').append(attrHBS(element));            }
            
        });
    });
});

$('#area6').click(function () {
    $('#output').empty();
    factory.getAttrData()
    .then((data) =>{
        data.forEach(element => {
            if (element.area_id === 6){
                $('#output').append(attrHBS(element));            }
            
        });
    });
});

$('#area7').click(function () {
    $('#output').empty();
    factory.getAttrData()
    .then((data) =>{
        data.forEach(element => {
            if (element.area_id === 7){
                $('#output').append(attrHBS(element));            }
            
        });
    });
});

$(document).on("click", ".test", function(){
    $(this).next().slideToggle();
    
});

// this function sets the date data from moments into an obj so that it can be used in a HBS template
module.exports.copyrightFooter = () => {
    let copyrightDate = {
        "year": moment().format("YYYY"),
        "date": moment().format("MMM Do, YYYY,")
    };
    $("#footer").append(footerHBS(copyrightDate));
};
