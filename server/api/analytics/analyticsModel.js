var { default:db } = require('../../db/db');
var { buildResponse } = require('../../helper');

var { getAllShowerActivity, getAllOralActivity } = require('./dataModels');

exports.getTotalUsage = function(userID) {
    console.log("User id: ", userID);

    return new Promise(function(resolve, reject) {

        getAllShowerActivity(userID)
        .then(showerActivity => {

            getAllOralActivity(userID)
            .then(oralActivity => {
                
                var response = buildResponse(true, 'Retrieved total analytics.' , { showers: showerActivity, oral: oralActivity });
                resolve(response);
            })
        })
        .catch(error => {
            var response = buildResponse(false, 'Failed to retrieve daily analytics.', {}, error);
            reject(response);
        })
    });
}