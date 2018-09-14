const functions = require('firebase-functions');
const QRCode = require('qrcode');
 
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.qrcodeGen = functions.https.onRequest((request, response) => {
    console.log(request.query.url)
    QRCode.toDataURL(request.query.url, function (err, img) {
        var qrRes = '<img src="'+img+'" height="300" width="300" />';
        console.log(qrRes);
        response.send(qrRes);
    });
    
});


exports.qrcodeGenParamsToJson = functions.https.onRequest((request, response) => {
    paramsToJson = JSON.stringify(request.query);
    console.log(paramsToJson)
    QRCode.toDataURL(paramsToJson, function (err, img) {
        var qrRes = '<img src="'+img+'" height="200" width="200" />';
        console.log(qrRes);
        response.send(qrRes);
    });
    
});