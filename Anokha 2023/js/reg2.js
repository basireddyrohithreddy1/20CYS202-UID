function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
	document.getElementById("show1").value="hide";
  } else {
    x.type = "password";
	document.getElementById("show1").value="show";
  }
}
function showPassword1() {
  var x = document.getElementById("password1");
  if (x.type === "password") {
    x.type = "text";
	document.getElementById("show2").value="hide";
  } else {
    x.type = "password";
	document.getElementById("show2").value="show";
  }
}
function valsub1()
{
var x=0;
var y=0;
var z=0;
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
return true}