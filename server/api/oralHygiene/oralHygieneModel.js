var { default:db } = require('../../db/db');
var { buildResponse } = require('../../helper');

exports.addToothBrush = function(userID) {
    return new Promise((resolve, reject) => {
        db.collection('oral').add({
            user_id: userID,
            created: new Date()
        })
        .then(docRef => {
            var response = buildResponse(true, "Successfully logged tooth brushing activity.");
            resolve(response);
        })
        .catch(error => {
            console.log(error);
            var response = buildResponse(false, "Failed to log tooth brushing.", {}, error);
            reject(response);
        })
    });
}