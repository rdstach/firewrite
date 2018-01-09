const admin = require("firebase-admin");
const prompt = require("prompt");

const print = console.log;
const serviceAccount = require("./serviceAccountKey.json");
const dbUrl = "https://xxxx.firebaseio.com"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: dbUrl
});
const db = admin.database()
const ref = db.ref("rootRef/auth")

prompt.start()
prompt.get(['username', 'password'], function(err, result) {
	insertAuth(result.username, result.password)
})

function insertAuth(username, password) {
	let data = {
		username,
		password,
		logged_in: false
	}

	ref.set(data)
	print("\nAuthentication is ready.")

	return process.exit(2)
}