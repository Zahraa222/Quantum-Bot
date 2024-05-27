### Quantum Bot Project
This project demonstrates how to create a Firebase Cloud Function to handle adding messages to a Firestore database.
 The functions is designed to receive HTTP requests, Validate input data, and store the messages in a user's subcollection in Firestore.

 ### Requirements
 Before you can deploy and test this project, ensure you have the following:
 - Node.js installed
 - Firebase CLI installed
 - A Firebase project setup

### Function Description

the _addMessage_ function is an HTTPS callable function that accepts data containing _text_ and _userId_. It stores this data in Firestore under the specified user's subcollection.

### Testing the Function

The function is deployed as an HTTPS callable function. A POST request is sent with a JSON  body:

```
{
  "data": {
  
    "text": "This is a test message",
    
    "userId": "user123"
    
  }
}
```
And a successful response will return a status of success and the message ID.
