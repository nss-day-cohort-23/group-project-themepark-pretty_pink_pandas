"use strict";

const $ = require('jquery');
require('handlebars');
let factory = require('./factory');
let attrHBS = require('../templates/attractions.hbs');

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


//  $(document).on("click", ".test", function(){
//      if ($(this).next().slideToggle()){
//      $(this).prev().hidden();}
//  });

$(document).on( 'click', ' .accordion h4', function() {

    let isOpen = $(this).next( 'div').is(':visible');
    
    $( ' .accordion h4 + div' ).slideUp();
  
    if ( ! isOpen ) {
      $( this ).next().stop().slideDown();
    }
    
  });







