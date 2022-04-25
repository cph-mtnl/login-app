export default function translateFirebaseError(firebaseError) {
  console.log(firebaseError);

  if (firebaseError === "auth/email-already-in-use") {
    return "This email is already signed up";
  }

  if (firebaseError === "auth/wrong-password") {
    return "Wrong password";
  }

  if (firebaseError === "auth/user-not-found") {
    return "No user with this email";
  }

  return firebaseError;
}
