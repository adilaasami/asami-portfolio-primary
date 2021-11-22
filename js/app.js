// navbar
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

// text array function
var text = ["UI/UX Designer", "Web Developer", "Graphic Designer"];
var counter = 0;
var elem = document.getElementById("textArray");
var inst = setInterval(change, 2000);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}

// navbar bg change over scroll
function scrollValue() {
  var navbar = document.getElementById('navbar');
  var scroll = window.scrollY;
  if (scroll < 200) {
      navbar.classList.remove('navbar-scroll');
  } else {
      navbar.classList.add('navbar-scroll');
  }
}

window.addEventListener('scroll', scrollValue);

// project filter
$(document).ready(function(){
  $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if (value == 'All'){
          $('.projects-img').show('1000');
      }else {
          $('.projects-img').not('.'+value).hide('1000');
          $('.projects-img').filter('.'+value).show('1000');
      }
  })
})

// email with js
function sendMail() {
  sender_name = document.getElementById("name").value
  var tempParams = {
    subject: "[Portfolio] New message from " + sender_name,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  emailjs.send('gmail','template_eh81wla', tempParams)
  .then(function(response) {
    console.log('Success!', response.status, response.text);
    alert("Message sent");
    window.location.reload(3);
  });
}

// toggle filter catagory
function myFilter() {
  var element = document.getElementById("myfilter");
  element.classList.toggle("true-filter");
}

// GSAP Animation
let timeline = gsap.timeline({ default: { duration: 1 }})
timeline
  .from('.hero-data', {x: '-100%', ease: 'sine.in'})
  .from('.img-me', {opacity: 0}, 1);

  // on scroll
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.about'
  }
});

  tl.from('.img-m2', {x: -100, opacity: 0, duration: 1.5})

let project = gsap.timeline({
  scrollTrigger: {
    trigger: '.project'
  }
});

  project.from('.project-view', {x: -100, opacity: 0, duration: 1.5, stagger: 1})