var { default:db } = require('../../db/db');
var { buildResponse } = require('../../helper');

exports.addShower = function(key, seconds) {
    return new Promise(function(resolve, reject) {
        db.collection('showers').add({
            user_id: key,
            duration: seconds,
            created: new Date()
        })
        .then(docRef => {
            var response = buildResponse(true, "Successfully logged shower");
            resolve(response);
        })
        .catch(error => {
            console.log(error);
            var response = buildResponse(false, "Failed to log shower.", {}, error);
            reject(response);
        })
    });
}