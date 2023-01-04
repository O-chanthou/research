
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC_drka1KyZtdkPkFoAkOly9VTe4Np9aWY",
  authDomain: "push-to-subscribe.firebaseapp.com",
  databaseURL: "https://push-to-subscribe-default-rtdb.firebaseio.com",
  projectId: "push-to-subscribe",
  storageBucket: "push-to-subscribe.appspot.com",
  messagingSenderId: "995045150562",
  appId: "1:995045150562:web:39657d4808421d7055e63b",
  measurementId: "G-7CL0ZP0849"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      getToken(messaging, {
        vapidKey:
          "BD00DNiE4kGkknPplRFonR5SYEDr8BPfum88s8BtUFIVhGjxNPaEFRrF7q7vfMs_4t659JQNkVXi5nMCOkIHtEg",
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log(`currentToken >>>>>>> ${currentToken}`);
          } else {
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    } else {
      console.log("Do not have permission.");
    }
  });
}

requestPermission();
