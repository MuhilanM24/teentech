const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uid = "px6XxJuEUPQuPT3bN0Rm6ZpjNRw2";

admin.auth().setCustomUserClaims(uid, { admin: true }).then(() => {
  console.log("Admin set:", uid);
  process.exit(0);
});
