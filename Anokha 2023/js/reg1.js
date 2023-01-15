console.log("Welcome to Anokha-Fest regestration page. Please fill the application form.");
//document.write("Let's go!!");

//let is only asscisible within the bolck whereas var is asscessible anywhere.
function validateName()
{
let nameLocal;
nameLocal=document.getElementById("username").value;

console.log("Username: " + nameLocal);
}
function validateUniversityName()
{
let universityNameLocal;
universityNameLocal=document.getElementById("universityname").value;
if (universityNameLocal=="")
{
 console.log("error didn't fill the 'university name' field.");
 return false
}
else{
 console.log("University name: " + universityNameLocal);
 return true
}
}
function validateEmail()
{
let emailLocal;
emailLocal=document.getElementById("email").value;
if (emailLocal=="")
{
 console.log("error didn't fill the email field.");
 return false
}
else{
console.log("email: " + emailLocal);
return true
}
}
function validatePassword()
{
let password;
password=document.getElementById("password").value;
let password1;
password1=document.getElementById("password1").value;
if(password=="")
{
return false
}
if (password==password1)
{
 return true
}
else{
alert("Your passwords are not the same. Check again.")
document.getElementById("password1").value="";
return false
}
}

function validate(){
if (valsub1() && validateUniversityName() && validateEmail() && validatePassword())
{
alert("Your form is registered. Try logging in.");
}
}
function updateName()
{
let nameLocal1;
nameLocal1=document.getElementById("username").value;
console.log("updated Username: " + nameLocal1);
}
function updateUniversityName()
{
let universityNameLocal1;
universityNameLocal1=document.getElementById("universityname").value;
console.log("updated University name: " + universityNameLocal1);
}
function updateEmail()
{
let emailLocal1;
emailLocal1=document.getElementById("email").value;
console.log("updated email: " + emailLocal1);
}
let username = document.getElementById("username");
username.addEventListener("input", () => {
  if (username.validity.tooLong || username.validity.tooShort || username.validity.valueMissing) {
    username.setCustomValidity("Name must be 2-40 characters.");
    username.reportValidity();
  } 
  else { username.setCustomValidity(""); }
});
let universityname = document.getElementById("universityname");
universityname.addEventListener("input", () => {
  if (universityname.validity.tooLong || universityname.validity.tooShort || universityname.validity.valueMissing) {
    universityname.setCustomValidity("University name should be 5-50 characters.");
    universityname.reportValidity();
  } else { universityname.setCustomValidity(""); }
});
let email = document.getElementById("email");
email.addEventListener("input", () => {
  if (email.validity.tooLong || email.validity.tooShort || email.validity.valueMissing) {
    email.setCustomValidity("Must fill valid university email.");
    email.reportValidity();
  } else { email.setCustomValidity(""); }
});