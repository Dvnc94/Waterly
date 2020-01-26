var { default:db } = require('../../db/db');
var { buildResponse } = require('../../helper');

exports.getTotalUsage = function(userID) {
    console.log("User id: ", userID);

    return new Promise(function(resolve, reject) {
        db.collection('showers').where('user_id', '==', userID).get()
        .then(documents => {
            var showerCount = 0;
            var totalShowerTime = 0;
            if (documents.empty) {
                console.log('No matching documents.');
            } else {
                documents.forEach(doc => {
                    var docInfo = doc.data();
                    ++showerCount;
                    totalShowerTime += docInfo.duration
                });
            }
            
            var response = buildResponse(true, 'Retrieved total analytics.' , { showers: { count : showerCount, totalTime: totalShowerTime, totalGallons: 0.0083 * totalShowerTime } });
            resolve(response);
        })
        .catch(error => {
            var response = buildResponse(false, 'Failed to retrieve daily analytics.', {}, error);
            reject(response);
        })
    });
}