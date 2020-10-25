const user1 = 'colin.jaffe@codeimmersives.com';
const password1 = 'Hotforhimself';
const user2 = 'mesuara@codeimmersives.com';
const password2 = 'Console.logger';
const user3 = 'anthony@codeimmersives.com';
const password3 = 'like a BOSS';


// **YOUR** code below. Pass those tests!

function isValidEmail(email) {
  return email.endsWith('@codeimmersives.com') && email.length >= 20;
}

function isValidPassword(password) {
  return password.length >= 8 && password.toUpperCase() !== password && password.toLowerCase() !== password;
}

function isRegisteredUser(email) {
  return email === user1 || email === user2 || email === user3;
}

function passwordMatches(name, password) {
  if (name === user1 && password === password1) {
    return true
  } else if (name === user2 && password === password2) {
    return true
  } else if (name === user3 && password === password3) {
    return true
  } else {
    return false
  }
}