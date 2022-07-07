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

let formContact = document.getElementById("contact-form");

console.log(formContact)

formContact.addEventListener('submit', function(e) {
  let lastname = document.getElementById('form-contact-lastname');
console.log(lastname.value)
  if(lastname.value == "") {
    let error = getElementById("error");
    error.innerHtml = "Veuillez taper votre nom!";
    error.style.color = 'red';
    e.preventDefault();
  }
})