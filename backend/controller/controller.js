// CONTROLLER/////////////////////////////////////////// CONTROLLER
import {
  getCategoryProductsFromFirebase,
  getUserEmailsFromFirebase,
  signInWithEmailToFirebase,
} from "../services/services.js";

export const getCategories = async (req, res, next) => {
  try {
    const products = await getCategoryProductsFromFirebase();
    res.status(200).json({
      data: [
        {
          products,
        },
      ],
      success: true,
    });
  } catch (e) {
    res.status(300).json({ success: false, error });
  }
};

export const loginPost = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await signInWithEmailToFirebase();
    res.status(200).json({ success: true, user });
  } catch (e) {
    res.status(400).json({ success: false, e });
  }
};

export const subscribeEmail = (req, res, next) => {
  const password = "12345678";
  const { email } = req.body;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          // window.localStorage.setItem("emailForSignIn", email);
          res.status(200).json({ success: true, user });
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          res.status(400).json({ success: false, errorMessage });
          // ...
        });
      // ...
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        res.status(400).json({
          success: false,
          errorMessage: "Хэрэглэгч бүртгэлтэй байна.",
        });
      } else {
        const errorMessage = error.message;
        res.status(400).json({ success: false, errorMessage });
      }
    });
};

export const checkValidate = async (req, res, next) => {
  const email = auth.currentUser.email;
  if (
    isSignInWithEmailLink(
      auth,
      `${process.env.URL}:${process.env.PORT}${req.url}`
    )
  ) {
    console.log(` isSignInWithEmailLink  ajillaj baina`);
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    if (!email) {
      console.log(` isSignInWithEmailLink  !email ajillaj baina`);
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      // email = window.prompt('Please provide your email for confirmation');
      res.status(200).json({
        success: true,
        errorMessage: "Please provide your email for confirmation",
      });
    }
    // The client SDK will parse the code from the link for you.
    console.log(auth, email, req.url);
    try {
      const result = await signInWithEmailLink(
        auth,
        email,
        `${process.env.URL}:${PORT}${req.url}`
      );
      console.log(`result ======================>`, result);
      await addEmailToFirebase(email);
      res.status(200).json({
        success: true,
        message: "Amjilttai burtgullee",
      });
    } catch (e) {
      console.log(` result  aldaa shvv`);
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
      res.status(400).json({ success: false, e });
    }
  } else {
    res.status(200).json({ error: "False Aldaa" });
  }
};
