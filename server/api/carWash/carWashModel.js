var { default:db } = require('../../db/db');
var { buildResponse } = require('../../helper');

exports.addCarWash = function(userID) {
    return new Promise((resolve, reject) => {
        db.collection('carwash').add({
            user_id: userID,
            created: new Date()
        })
        .then(docRef => {
            var response = buildResponse(true, "Successfully logged car wash activity.");
            resolve(response);
        })
        .catch(error => {
            console.log(error);
            var response = buildResponse(false, "Failed to log car wash activity.", {}, error);
            reject(response);
        })
    });
}