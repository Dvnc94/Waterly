var { default:db } = require('../../db/db');
var { buildResponse } = require('../../helper');


exports.addWashHands = function(userID) {
    return new Promise((resolve, reject) => {
        db.collection('washhands').add({
            user_id: userID,
            created: new Date()
        })
        .then(docRef => {
            var response = buildResponse(true, "Successfully logged washing hands activity.");
            resolve(response);
        })
        .catch(error => {
            console.log(error);
            var response = buildResponse(false, "Failed to log washing hands activity.", {}, error);
            reject(response);
        })
    });
}