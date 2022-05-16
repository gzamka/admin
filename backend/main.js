import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
// import { auth } from "./firebase/firebase-config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import firebaseApp  from "./firebase/firebase-config";

const app = express();
const router = express.Router();

// App configure
dotenv.config({ path: "./config/config.env" });

app.use(bodyParser.json());
app.use('/', router);
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

// controller
const getCategories = (req, res, next) => {
  res.status(200).json({
      data: [
        {
          product1: "1",
          product2: "2",
          product3: "3",
        },
      ],
      success: true,
    });
}

const loginPost = (req, res, next) => {
  const {email, password} = req.body;
  const auth = getAuth(firebaseApp);
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    res.status(200).json({ success: true, user });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    res.status(400).json({ success: false, errorMessage });
  });
  
  
}


// router
router.route('/').get(getCategories);
router.route('/login').post(loginPost);
