var { default:db } = require('../../db/db');

exports.addShower = function(key, seconds) {
    return new Promise(function(resolve, reject) {
        db.collection('showers').add({
            user: key,
            duration: seconds
        })
        .then(docRef => {
            resolve(true);
        })
        .catch(error => {
            console.log(error);
            reject(error);
        })
    });
}