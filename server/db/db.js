const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'qwer-hacks-266300',
  keyFilename: 'db/QWER Hacks-09f8cd899684.json',
});


exports.default = db;