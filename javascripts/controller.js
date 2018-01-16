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
    return new Promise((resolve, reject) => {

    let p1 = factory.getAttractionData();
    let p2 = factory.getAttTypes();
    let newDataWithTypes = [];
        Promise.all([p1,p2])
        .then((attrData) => { 
            attrData[0].forEach(allAttractions => {
                attrData[1].forEach(typeofAttractions => {
                        if (allAttractions.type_id === typeofAttractions.id) {
                            allAttractions.type = typeofAttractions.name;
                            newDataWithTypes.push(allAttractions); 
                        }
                    });
                });
            }
        );
        resolve(newDataWithTypes);
    });
    };