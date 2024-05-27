const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {logger} = functions;

exports.addMessage = functions.https.onCall(async (data, context) => {
  try {
    logger.log("Received data", data);

    if (!data.text || !data.userId) {
      logger.log("Requred fields (text or userId) are missing");
      throw new functions.https.HttpsError("invalid-argument", "text/userId");
    }


    const {text, userId} = data;

    // construct message data
    const messageData = {
      text,
      userId,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    };

    // add message to the user's message subcollection in firestore
    const messageRef = await admin.firestore()
        .collection("chats")
        .doc(userId)
        .collection("messages")
        .add(messageData);
    logger.log("Message added, message ID: ", messageRef.id);


    // return success status and message ID
    return {
      status: "success",
      messageId: messageRef.id,
    };
  } catch (error) {
    logger.error("Error adding message: ", error);
    // throw error to client
    throw new functions.https.HttpsError("unknown", "error", error.message);
  }
});
