const navbar = document.getElementById("navbarSite");
const scrollTopButton = document.getElementById("scroll-top-button");

window.onscroll= function(){
  if(window.pageYOffset>200){
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-dark", "navbar-dark");

    scrollTopButton.classList.add("show");
  } else {
    navbar.classList.add("bg-transparent", "navbar-dark");
    navbar.classList.remove("bg-dark");

    scrollTopButton.classList.remove("show");
  }
}

/* EFFET MACHINE à ECRIRE */

const typeWriter = document.getElementById('type-writer');

let typewriter = new Typewriter(typeWriter, {
  loop: true
});

typewriter.typeString('Freelance')
  .pauseFor(1500)
  .deleteChars(9)
  .typeString('<span style="color: #FF5722;">HTML 5</span>')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString('<span style="color: #2196F3;">CSS 3</span>')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('<span style="color: #FFDF00;">JavaScript</span>')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<span style="color: #777BB3;">Php</span>')
  .pauseFor(1000)
  .deleteChars(3)
  .typeString('<span style="color: #fff;">Symfony</span>')
  .pauseFor(1000)
  .start();

/* VALIDATION FORMULAIRE */

const form = document.getElementById("contact-form");

function validateRequired(id, nomDuChamps)
{
  let value = document.getElementById(id).value;
  let errorMessageSpan = document.getElementById(id + "ErrorMessage");

  if(value == "")
  {
    let errorText =  "Veuillez entrer votre " + nomDuChamps + " !";
    errorMessageSpan.innerHTML = errorText;
    return errorText;
  }
  else
  {
    errorMessageSpan.innerHTML = '';
    return '';
  }
}

function validateMinimumLength(id, minimumLength, nomDuChamps)
{
  let value = document.getElementById(id).value;
  let errorMessageSpan = document.getElementById(id + "ErrorMessage");

  if(value.length < minimumLength)
  {
    let errorText =  "Votre " + nomDuChamps + " doit contenir plus de " + minimumLength + " caractères!";
    errorMessageSpan.innerHTML = errorText;
    return errorText;
  }
  else
  {
    errorMessageSpan.innerHTML = '';
    return '';
  }
}

function validateCheckbox()
{
  let checkbox = document.getElementById('agree');
  let errorMessageSpan = document.getElementById('agreeErrorMessage');

  if(!checkbox.checked)
  {
    let errorText =  "Vous devez acceptez la politique de confidentialité!";
    errorMessageSpan.innerHTML = errorText;
    return errorText;
  }
  else
  {
    errorMessageSpan.innerHTML = '';
    return '';
  }
}

function validateMail()
{
  let expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  let errorMessageSpan = document.getElementById('mailErrorMessage');

  if(!expressionReguliere.test(document.getElementById('mail').value))
  {
    let errorText =  "Vous devez entrer une adresse mail valide!";
    errorMessageSpan.innerHTML = errorText;
    return errorText;
  }
}

function functSubmit(event) {

  let errorMessage = validateRequired('name', "nom");
  console.log('ça marche');
  errorMessage += validateRequired("firstname", "prénom");
  errorMessage += validateRequired("mail", "e-mail");
  errorMessage += validateRequired("message", "message");
  errorMessage += validateCheckbox();
  errorMessage += validateMail();

  if(errorMessage != '')
  {
    console.log("ça marche po")
    event.preventDefault();
  }
};