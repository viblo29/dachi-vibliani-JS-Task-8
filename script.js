let passwords = [];
passwords.push(`paroLi123`, `gmiri5`, `saLpetki1`);

let lowercasePasswords = [];
for (let password = 0; password < passwords.length; password++) {
  lowercasePasswords.push(passwords[password].toLocaleLowerCase());
}
console.log(`Passwords`, lowercasePasswords);

let passwordStrength = [];
for (let index = 0; index < passwords.length; index++) {
  if (passwords[index].length >= 8) {
    passwordStrength.push(`Strong Password`);
  } else {
    passwordStrength.push(`Weak Password`);
  }
}
console.log(`Password Strength`, passwordStrength);

let countLetter = [];
i = 0;
for (let i = 0; i < passwords.length; i++) {
  countLetter.push(lowercasePasswords[i].length);
}
console.log(`Number of letters in password`, countLetter);

passwords.shift();
console.log(`Removed the first password`, passwords);

passwords.unshift(`axaliParoLi7`);
console.log(`Added the first password`, passwords);
