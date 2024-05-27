const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { text } = require("body-parser");
const {logger} = require(functions);

exports.addMessage = functions.https.onCall(async (data, context) => {
    try{
        logger.log("Received data", data);

        if(!data.text || !data.userId){
            logger.log("Requred fields (text or userId) are missing");
            throw new functions.https.HttpsError("invalid-argument", "The required fields are (text or user Id) are missing");
        }


        const {text, userId} = data;
        //construct message data
        const messageData = {
            text,
            userId,
            timestamp: admin.firestore.FieldValue.serverTimestamp()
        };

    

    } catch (error) {
        logger.error("Error", error);
    }});