console.log('it works') /*checked to see js is inserted correctly*/


//contact_us

function getForm() {
    return document.getElementByClassName("form");
  }

$(document).ready(function() {
$('.submit').click(function(event) {
  
   console.log('Clicked button')
  
                                      
  var subject = $('.subject').val()
  var email=$('.email').val()
  var phone=$('.phone').val()
  var numbers = /^[0-9]+$/
  var message=$('.message').val()
  var statusElm =$('.status')/* display input status for  user with var statusElm*/
  statusElm.empty() /*empty the form in case of multiple validations*/
                                      
     //Check subject is valid
 if(subject.length >= 2) {
    statusElm.append('<div> Subject is valid </div>')
 } else {
   event.preventDefault()
   statusElm.append('<div> Subject is not valid </div>')
 }                                   
   
    //Check email is valid 
  if(email.length >5 && email.includes('@') && email.includes('.')) { /*All three conditions need to be true before continuing*/
   statusElm.append('<div> Email is valid </div>')  /*append will add new html inside that selector*/
 } else {
   event.preventDefault()/*everytime something makes the form invalid this function will prevent it to submit */
   statusElm.append('<div> Email is not valid </div>')
 }
    
  //Check if phone is valid
   if(phone.length = 10 && phone.match(numbers)) {
    statusElm.append('<div> Phone is valid </div>')  
    } else {
    event.preventDefault()
    statusElm.append ('<div> Phone is not valid </div>')
    }                             
    
 
   //Check message is valid
 if(message.length >=10) {
   statusElm.append('<div> Message is valid </div>')
   }else {
     event.preventDefault()
     statusElm.append('<div> Message is not valid </div>')
   }
}) 
});


(document).ready(function(){
  (".submit").click(function(){
    (this).css("background-color", "#B44040");
  });
})





