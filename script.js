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
    let errorText = '';
    errorMessageSpan.innerHTML = '';
    return errorText;
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
    let errorText = '';
    errorMessageSpan.innerHTML = '';
    return errorText;
  }
}


function validateMail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.mail.value))
  {
    let errorText = '';
    let errorMessageSpan = document.getElementById("mailErrorMessage");
    errorMessageSpan.innerHTML = '';
    return errorText
  }
  else
  {
    let errorText =  "Vous devez entre une adresse email valide!";
    let errorMessageSpan = document.getElementById("mailErrorMessage");
    errorMessageSpan.innerHTML = errorText;
    return errorText;
  }
  
}

form.addEventListener("submit", (event => {

  let errorMessage = '';
  errorMessage += validateRequired('name', "nom");
  errorMessage += validateRequired("firstname", "prénom");
  errorMessage += validateRequired("mail", "e-mail");
  errorMessage += validateRequired("message", "message");
  errorMessage += validateCheckbox();
  errorMessage += validateMail();

  if(errorMessage != '')
  {
    event.preventDefault();
  }
}));