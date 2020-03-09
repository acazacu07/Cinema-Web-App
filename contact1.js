var x, text, text2, y, text3, z, text4, zz, text5, aa;

  

function sampleForm() {


// Code to verify the subject is not empty 

   x = document.getElementsByClassName("subject").value; // this gets the value of the input field
   if (x == "") {
      text = "Name Can Not Be Blank";
	  document.getElementById("alert1").innerHTML = text;
    }
	
	else if (/\s+/.test(x)) { 
	text2 = "That is a Real Name";
	alert(text2.toString());
	}
	
	
	
y = document.getElementsByClassName("email").value;
yy = (/@/.test(y));

if (yy == false){
text3 = "That is Not a Real Email";
	alert(text3.toString());
	}
	
	else if  (yy == true){
	text3 = "That is  a Real Email";
	document.getElementById("alert2").innerHTML = text3;
	}
	
	z = document.getElementsByClassName("phone").value;
	zz = /[0-9]/.test(z);
	if (zz == false){
	text4 = "That is Not a Valid Password";
	document.getElementById("alert3").innerHTML = text4;
	}
	
//	else if (zz == true){
//	text4 = "That is a Valid Password";
//	alert(text4.toString());
//	}
	
//	aa = document.getElementById("robo").value;
	
//	if (aa == 11){
//	text5 = "You are human";
//	document.getElementById("alert4").innerHTML = text5;
//	}
	

}


/*Jquery 1
(document).ready(function(){
  ("submit").click(function(){
    (this).css("background-color", "#B44040");
  });
})
