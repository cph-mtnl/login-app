export function validateEmail(email) {
  const parts = email.split("@");

  // Validate that 1 and only 1 @ is present.
  if (parts.length !== 2) {
    return "No @ present";
  }

  // Left side is non-empty
  if (parts[0].length === 0) {
    return "The local email part is empty";
  }

  if (parts[1].toLowerCase() !== "cphbusiness.dk") {
    return "Wrong domain, domain must be 'cphbusiness.dk'";
  }
}

export function validatePassword(password) {
  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }
}

export function validateConfirmation(password, confirmation) {
  if (password !== confirmation) {
    return "Passwords does not match";
  }
}
