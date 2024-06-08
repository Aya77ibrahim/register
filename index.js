var userName=document.getElementById("userName")
var userEmail=document.getElementById("userEmail")
var userPass=document.getElementById("userPass")
var logEmail=document.getElementById("userEmailLog")
var logPass=document.getElementById("userPassLog")
var element1=document.querySelector(' button.sign')
var cont=document.querySelector('.container')
console.log(element1);


var login=document.querySelector('.login')
var signup=document.querySelector('.signup')
var elementNav=document.querySelector('.navbar')



function loginPage(){
    login.classList.remove('d-none')

    signup.classList.add('d-none')

}

function signupPage(){
    login.classList.add('d-none')

    signup.classList.remove('d-none')
}

function logg(){
  
    elementNav.classList.remove('d-none')
    login.classList.add('d-none')
    signup.classList.add('d-none')
    cont.classList.add("d-none")
    var x=document.createElement('h2')
 x.classList.add('text-center')
 x.classList.add('text-danger')
 x.classList.add('m-auto')
 
var text=document.createTextNode('welcome'+' '+ userName)
x.appendChild(text)
document.body.appendChild(x)
}

var nameRegex = /^\w{3,}(\s+\w+)*$/;
var emailRegx =   /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var passRegx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/


userName.addEventListener("input", function () {
    validate(userName, nameRegex);
  });
  
  userEmail.addEventListener("input", function () {
    validate(userEmail, emailRegx);
  });
  
  userPass.addEventListener("input", function () {
    validate(userPass, passRegx);
  });
  
  function validate(element, regex) {
    var testRegex = regex;
    if (testRegex.test(element.value)) {
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
    } else {
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
    }
  }
  
var addArray;

  var signupArray=[]
function addarray() {
    var addArray= {
        userName:userName.value,
        userEmail: userEmail.value,
        userPass: userPass.value
    }
    if(userName.classList.contains('is-valid')&&userEmail.classList.contains('is-valid')&&userPass.classList.contains('is-valid')){

           
  signupArray.push(addArray);
  console.log(signupArray)
  localStorage.setItem('user',JSON.stringify(signupArray))}}

  function isLoginEmpty() {

    if (logPass.value == "" || logEmail.value == "") {
        return false
    } else {
        return true
    }
}




  function checkLogin(){
    if (isLoginEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        
    }


    var password = logPass.value
    var email = logEmail.value
    
    for (var i = 0; i < signupArray.length; i++) {
        if (signupArray[i].email === email && signupArray[i].password === password) {
            element1.addEventListener('click',function(event){
                console.log(hello);
                logg()
            })
             
          
        
  }
  

    }}


  





function isEmpty() {

    if (userName.value == "" || userEmail.value == "" || userPass.value == "") {
        return false
    } else {
        return true
    }
}

