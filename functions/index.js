const admin = require("firebase-admin");
admin.initializeApp();

// import the function from the specific file
const {addMessage} = require("./api/addMessage");

// export the function for deployment
exports.addMessage = addMessage;
