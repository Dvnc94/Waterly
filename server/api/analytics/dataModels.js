var { default:db } = require('../../db/db');
var { buildResponse } = require('../../helper');

exports.getAllShowerActivity = function(userID) {

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
            
            resolve({ count : showerCount, totalTime: totalShowerTime, totalGallons: 0.0583 * totalShowerTime });
            
        })
        .catch(error => {
            throw(error);
        })
    });
}


exports.getAllOralActivity = function(userID) {

    return new Promise((resolve, reject) => {
        db.collection('oral').where('user_id', '==', userID).get()
        .then(documents => {
            var totalOralActivity = 0;
            documents.forEach(activity => {
                ++totalOralActivity;
            });  
            resolve({ count: totalOralActivity, totalGallons: 0.5 * totalOralActivity });
        })
        .catch(error => {
            throw(error);
        })
    });
}


exports.getAllCarWashActivity = function(userID) {

    return new Promise((resolve, reject) => {
        db.collection('carwash').where('user_id', '==', userID).get()
        .then(documents => {
            var totalCarWashActivity = 0;
            documents.forEach(activity => {
                ++totalCarWashActivity;
            });  
            resolve({ count: totalCarWashActivity, totalGallons: 36 * totalCarWashActivity });
        })
        .catch(error => {
            throw(error);
        })
    });
}


exports.getAllWashHandsActivity = function(userID) {

    return new Promise((resolve, reject) => {
        db.collection('washhands').where('user_id', '==', userID).get()
        .then(documents => {
            var totalWashHandsActivity = 0;
            documents.forEach(activity => {
                ++totalWashHandsActivity;
            });  
            resolve({ count: totalWashHandsActivity, totalGallons: totalWashHandsActivity });
        })
        .catch(error => {
            throw(error);
        })
    });
}