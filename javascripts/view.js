"use strict";

const $ = require('jquery');
require('handlebars');
let factory = require('./factory');

$('#area1').click(function () {
    factory.getAttrData()
    .then((data) =>{
        data.forEach(element => {
            if (element.area_id === 1){
                $('#output').append(`<div><h4 class="test"><a href="#">${element.name}</a></h4><div class="hidden">${element.description}<br>${element.times}</div></div>`);
            }
            
        });
    });
});

$('#area2').click(function () {
    factory.getAttrData()
    .then((data) =>{
        data.forEach(element => {
            if (element.area_id === 2){
                $('#output').append(`<div><h4>${element.name}</h4><br><a class="test" href="#">description</a><div class="hidden">${element.description}<br>${element.times}</div></div>`);
            }
            
        });
    });
});

$('#area3').click(function () {
    factory.getAttrData()
    .then((data) =>{
        data.forEach(element => {
            if (element.area_id === 3){
                $('#output').append(`<div><h4>${element.name}</h4><br><a class="test" href="#">description</a><div class="hidden">${element.description}<br>${element.times}</div></div>`);
            }
            
        });
    });
});

$('#area4').click(function () {
    factory.getAttrData()
    .then((data) =>{
        data.forEach(element => {
            if (element.area_id === 4){
                $('#output').append(`<div><h4>${element.name}</h4><br><a class="test" href="#">description</a><div class="hidden">${element.description}<br>${element.times}</div></div>`);
            }
            
        });
    });
});

$('#area5').click(function () {
    factory.getAttrData()
    .then((data) =>{
        data.forEach(element => {
            if (element.area_id === 5){
                $('#output').append(`<div><h4>${element.name}</h4><br><a class="test" href="#">description</a><div class="hidden">${element.description}<br>${element.times}</div></div>`);
            }
            
        });
    });
});

$('#area6').click(function () {
    factory.getAttrData()
    .then((data) =>{
        data.forEach(element => {
            if (element.area_id === 6){
                $('#output').append(`<div><h4>${element.name}</h4><br><a class="test" href="#">description</a><div class="hidden">${element.description}<br>${element.times}</div></div>`);
            }
            
        });
    });
});

$('#area7').click(function () {
    factory.getAttrData()
    .then((data) =>{
        data.forEach(element => {
            if (element.area_id === 7){
                $('#output').append(`<div><h4>${element.name}</h4><a class="test" href="#">description</a><div class="hidden">${element.description}${element.times}</div></div>`);
            }
            
        });
    });
});

$(document).on("click", ".test", function(){
    console.log('hey',event);
    
    $(this).next().slideToggle();
    
});
    
let userInput = document.getElementById('input');
userInput.addEventListener('keypress', (e)=>{
    if(e.keyCode === 13){
        factory.getAttrData()
        .then((data)=>{
            data.forEach(element =>{
                if(element.name === userInput.value){
                    console.log(element.area_id);
                }
            });
        });
    }
});




