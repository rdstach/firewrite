const admin = require("firebase-admin");
const prompt = require("prompt");

const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firewrite-9cc8f.firebaseio.com"
});

prompt.start()

prompt.get(['username', 'email'], function(err, result) {

})
