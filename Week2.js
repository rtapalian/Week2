  /*
	Author: Richard Tapalian
	Week 1
	Date: 07/31/2013
	
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
		
		
		/*if ( hasErrors ) {
			alert("First name is no good");
		} else {
			alert("First name is good");
		}
		*/	
			
	
			
			
		var hasErrors = false;
			
		if (!lname.value.length) {
			err_lname.innerHTML = "*";/*"<em>Please enter your last name</em>";*/
			lname.className = "bad";
			hasErrors = true;
		} 
		else {
			err_lname.innerHTML = "";
			lname.className = "good";
		}
		
		
		/*if ( hasErrors ) {
			alert("Last name is no good");
		} else {
			alert("Last name is good");
		}
		*/	
			
	
	
			
			
		var hasErrors = false;
			
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
		
		
		/*if ( hasErrors ) {
			alert("Email is no good");
		} else {
			alert("Email is good");
		}
		*/
		
		var	hasErrors = false;
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
		/*if (hasErrors)
		{
			alert ("Comments are no good");
		}
		else {
			alert("Comments are good");
		}
		*/
			
	}
