var { default:db } = require('../../db/db');
var { buildResponse } = require('../../helper');

var { getAllShowerActivity, getAllOralActivity, getAllCarWashActivity } = require('./dataModels');

exports.getTotalUsage = function(userID) {
    console.log("User id: ", userID);

    return new Promise(function(resolve, reject) {
        var absoluteTotal = 0;

        getAllShowerActivity(userID)
        .then(showerActivity => {
            absoluteTotal += showerActivity.totalGallons;

            getAllOralActivity(userID)
            .then(oralActivity => {
                absoluteTotal += oralActivity.totalGallons;

                getAllCarWashActivity(userID)
                .then(carWashActivity => {
                    absoluteTotal += carWashActivity.totalGallons;

                    var response = buildResponse(true, 'Retrieved total analytics.' , { analytics: { showers: showerActivity, oral: oralActivity, carwash: carWashActivity, totalGallons: absoluteTotal } } );
                    resolve(response);
                })
            })
        })
        .catch(error => {
            var response = buildResponse(false, 'Failed to retrieve daily analytics.', {}, error);
            reject(response);
        })
    });
}