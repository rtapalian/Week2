 /*
Author: Richard Tapalian
Week 2
Date: 08/07/2013
*/
/*Main Function activated by submit button
all variables are defined below.  Information is taken from
the form that is filled out by the user.*/
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
/*Checks to see if there is a first name entered*/
if (!name.value.length) {
err_name.innerHTML = "*";
name.className = "bad";
hasErrors = true;
}
else {
err_name.innerHTML = "";
name.className = "good";
}



/*Checks to see if there is a last name entered*/
if (!lname.value.length) {
err_lname.innerHTML = "*";
lname.className = "bad";
hasErrors = true;
}
else {
err_lname.innerHTML = "";
lname.className = "good";
}



/*Checks to make sure that email is properly formated with a period and @ symbol*/
if ( !email.value.length )
{
err_email.innerHTML = "*";
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


/*Checks to see if the comment length is between 0 and 150 characters*/
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
/*Takes the good data entered and displays a confirmation page*/
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
