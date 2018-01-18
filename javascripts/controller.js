"use strict";

const $ = require('jquery');
require('handlebars');
let factory = require('./factory');


        //console.log('new attraction array',attractionTime);

factory.getAreas()
.then ((areas) => {
    //console.log('areas working',areas);
});

factory.getAttTypes()
.then((type) => {
    console.log("types working", type);
});

factory.getInfo()
.then((info) => {
    //console.log('info working', info);
});

module.exports.getType = (attrData) => {
    //creating new Promise to load when used in other functions
    return new Promise((resolve, reject) => {
    //getting our data from two ajax calls, attractions and attraction types
    let p1 = factory.getAttractionData();
    let p2 = factory.getAttTypes();
    // empty array to push data into once we have manipulated it
    let newDataWithTypes = [];
    //promise all to get both data types before using them.
        Promise.all([p1,p2])
        .then((attrData) => { 
            // loop over the first array, all 132 attractions
            attrData[0].forEach(allAttractions => {
                // loop over second array, the 8 types
                attrData[1].forEach(typeofAttractions => {
                    // if statement to add the types to each attraction based on their type id!
                        if (allAttractions.type_id === typeofAttractions.id) {
                            allAttractions.type = typeofAttractions.name;
                            // pushes to the array on 32
                            newDataWithTypes.push(allAttractions); 
                        }
                    });
                });
                resolve(newDataWithTypes);
            }
        );
    });
    };
module.exports.getLocation = (attrData) => {
    //creating new Promise to load when used in other functions
    return new Promise((resolve, reject) => {
    //getting our data from two ajax calls, attractions and attraction types
    let p1 = factory.getAttractionData();
    let p2 = factory.getInfo();
    // empty array to push data into once we have manipulated it
    let newDataWithInfo = [];
    //promise all to get both data types before using them.
        Promise.all([p1,p2])
        .then((attrData) => { 
            // loop over the first array, all 132 attractions
            attrData[0].forEach(allAttractions => {
                // loop over second array, the 8 types
                attrData[1].forEach(parkInfo => {
                    // if statement to add the types to each attraction based on their type id!
                            allAttractions.location = parkInfo.location;
                            // pushes to the array on 32
                            newDataWithInfo.push(allAttractions); 
                        
                    });
                });
                resolve(newDataWithInfo);
            }
        );
    });
    };