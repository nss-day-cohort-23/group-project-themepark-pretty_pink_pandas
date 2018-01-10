"use strict";

const $ = require('jquery');
require('handlebars');

module.exports.getData = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "https://themepark-5f773.firebaseio.com/themePark/-L2W7UdQhglpEtROZ12K/attractions.json"
      })
        .done(data => {
          resolve(data);
          console.log(data);
          
        })
        .fail(error => {
          console.log("uh-oh", error.statusText);
          reject(error);
        });
    });
  };

//   module.exports.timeFilter = () => {
//       return new Promise((resolve, reject) => {
//           $.ajax({
//               url:
//           })
//       })
//   }
  
  
