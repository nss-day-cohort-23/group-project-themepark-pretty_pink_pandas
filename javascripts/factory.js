"use strict";

const $ = require('jquery');
require('handlebars');

module.exports.getAttrData = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "https://themepark-5f773.firebaseio.com/themePark/-L2W7UdQhglpEtROZ12K/attractions.json"
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
            url: "https://themepark-5f773.firebaseio.com/themePark/-L2W7UdQhglpEtROZ12K/areas.json"
  
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
            url: "https://themepark-5f773.firebaseio.com/themePark/-L2W7UdQhglpEtROZ12K/attraction_types.json"
  
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
        url: "https://themepark-5f773.firebaseio.com/themePark/-L2W7UdQhglpEtROZ12K/park-info.json"
  
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
            url:`https://themepark-5f773.firebaseio.com/themePark/-L2W7UdQhglpEtROZ12K/attractions.json`
        })
        .done(data=>{
            resolve(data);
            
        });
    });
};

