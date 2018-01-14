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

$(document).on("click", ".test", function(){
    $(this).next().slideToggle();
    
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

