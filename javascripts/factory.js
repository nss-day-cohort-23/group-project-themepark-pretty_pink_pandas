"use strict";

const $ = require('jquery');
require('handlebars');

module.exports.getAttrData = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "https://themepark-5f773.firebaseio.com/attractions.json"
      })
        .done(data => {
            
          resolve(data);
          
        })
        .fail(error => {
          console.log("uh-oh", error.statusText);
          reject(error);
        });
    });
  };

  module.exports.getAreas = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://themepark-5f773.firebaseio.com/areas.json"
  
        })
        .done(areas => {
            resolve(areas);
            
        })
        .fail(error => {
         console.log("uh-oh", error.statusText);
        reject(error);
        });
  });
};

  module.exports.getAttTypes = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://themepark-5f773.firebaseio.com/attraction_types.json"
  
        })
        .done(type => {
        resolve(type);
        
        })
        .fail(error => {
         console.log("uh-oh", error.statusText);
        reject(error);
        });
  });
};

  module.exports.getInfo = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
        url: "https://themepark-5f773.firebaseio.com/park-info.json"
  
        })
        .done(info => {
        resolve(info);
        
        })
        .fail(error => {
        console.log("uh-oh", error.statusText);
         reject(error);
        });
  });
};


  

module.exports.getAttractionData = ()=>{
    return new Promise ((resolve, reject ) =>{
        $.ajax({
            url:`https://themepark-5f773.firebaseio.com/attractions.json`
        })
        .done(data=>{
            resolve(data);
            
        });
    });
};

