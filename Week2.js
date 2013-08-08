  /*
Author: Richard Tapalian
Week 2
Date: 08/07/2013
*/
function submitForm() {
var name = document.getElementById('int-name');
var err_name = document.getElementById('err_name');
var lname = document.getElementById('int-lname');
var email = document.getElementById('email');
var comments = document.getElementById('int-comments');
var err_lname = document.getElementById('err_lname');
var err_email = document.getElementById('err_email');
var err_comments = document.getElementById('err_comments');
var myform=document.getElementById("myform");
var confirmation=document.getElementById("confirmation");
var confirm_results=document.getElementById("confirm_results");

var hasErrors = false;

if (!name.value.length) {
err_name.innerHTML = "*";/*"<em>Please enter a first name</em>";*/
name.className = "bad";
hasErrors = true;
}
else {
err_name.innerHTML = "";
name.className = "good";
}




if (!lname.value.length) {
err_lname.innerHTML = "*";/*"<em>Please enter your last name</em>";*/
lname.className = "bad";
hasErrors = true;
}
else {
err_lname.innerHTML = "";
lname.className = "good";
}




if ( !email.value.length )
{
err_email.innerHTML = "*";/*"<em>Please Fill out your email</em>";*/
email.className = "bad";
hasErrors = true;
} else if (email.value.indexOf("@") == -1)
{
err_email.innerHTML = "<em>@ is missing</em>";
email.className= "bad";
hasErrors = true;
}
else if (email.value.indexOf(".") == -1 )
{
err_email.innerHTML = "<em>. is missing</em>";
email.className="bad";
hasErrors = true;
}
else {
err_email.innerHTML = "";
email.className = "good";
}



if (comments.value.length==0)
{
err_comments.innerHTML = "*";
comments.className="bad";
hasErrors = true;
}
else if (comments.value.length >150)
{
err_comments.innerHTML = "<em>Please enter between 1 and 150 characters</em>";
comments.className="bad";
hasErrors = true;
}
else {
err_comments.innerHTML = "";
comments.className = "good";
}

var stringconfirm = "";
if (!hasErrors){
	myform.style.display="none";
	confirmation.style.display="block";
	confirmation.style.borderColor="blue";
	stringconfirm = "<ul>";
	stringconfirm=stringconfirm + "<li>Your First Name: "+name.value+"</li>";
	stringconfirm=stringconfirm + "<li>Your Last Name: "+lname.value+"</li>";
	stringconfirm=stringconfirm + "<li>Your Email: "+email.value+"</li>";
	stringconfirm=stringconfirm + "<li>Your Name: "+comments.value+"</li>";
	"</ul>";
	confirm_results.innerHTML = stringconfirm;
}
}
