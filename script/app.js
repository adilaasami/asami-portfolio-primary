/*
Title: Portfolio javaScript file for funtionality purposes.
Author: Adil Sami
Date created: 01/01/2021
Last update: 03/10/2025

Purpose: This script file was made to build out funtionality features for my portfolio website so that it can be dynamic and interactive to users.

Author notes: None
*/

// navbar
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

// text array function
var text = ["UX Designer", "Product Designer", "Frontend Developer"];
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

// project tab
function projectTab() {
  let projectOne = document.getElementById('project-one');
  let projectTwo = document.getElementById('project-two');
  let projectThree = document.getElementById('project-three');
  let projectDetails = document.getElementById('project-details');

  projectOne.addEventListener("click", () => 
    projectDetails.innerHTML = `<div class="project-content">
    <p style="font-weight: 200;">Project 01</p>
    <h3>Foodie Mobile Application</h3>
    <p style="color: #9A9A9A;">UX Case Study</p>
    <p>For the Foodie App case study, I conducted a competitive audit and identified user pain points, creating personas, journey maps, wireframes, and
    prototypes, using Figma. An unmoderated usability study with 5+ participants revealed key concerns, which I addressed with generative AI insights and accessibility
    improvements, finalizing the mockup design after iterative testing.</p>
    <ul>
    <li>Figma</li>
    <li>Illustrator</li>
    <li>Photoshop</li>
    </ul>
    <a href="project/foodie-case-study.html"><button class="btn">View</button></a>
    </div>
    <div class="project-image">
        <img src="images/project-foodie.png" alt="Foodie Mobile Application">
    </div>`
  );

  projectTwo.addEventListener("click", () => 
    projectDetails.innerHTML = `<div class="project-content">
    <p style="font-weight: 200;">Project 02</p>
    <h3>BravePets Responsive Web Application Design</h3>
    <p style="color: #9A9A9A;">UX Case Study</p>
    <p>For the BravePets responsive website case study, I conducted a competitive audit and analyzed the target audience to identify user pain points,
    creating personas, user journey maps, wireframes, and prototypes for desktop and mobile, using Adobe XD. A moderated usability study with 5+ participants revealed concerns, which I addressed using generative AI insights and accessibility improvements, refining the design through iterative testing before finalizing the website mockups.</p>
    <ul>
    <li>Adobe XD</li>
    <li>Illustrator</li>
    <li>Photoshop</li>
    </ul>
    <a href="project/brave-pet-case-study.html"><button class="btn">View</button></a>
    </div>
    <div class="project-image">
        <img src="images/project-bravepet.png" alt="BravePets Responsive Web Application">
    </div>`
  );

  projectThree.addEventListener("click", () => 
    projectDetails.innerHTML = `<div class="project-content">
    <p style="font-weight: 200;">Project 03</p>
    <h3>Unprotected Victims Web Application</h3>
    <p style="color: #9A9A9A;">Software Development</p>
    <p>Once the mockups were finalized, I developed the front-end using HTML, CSS, Bootstrap 5, and JavaScript, ensuring responsiveness and interactivity. I optimized for performance and cross-device/ browser compatibility. Conducted usability testing and debugging to refine the user experience.</p>
    <ul>
    <li>Figma</li>
    <li>Illustrator</li>
    <li>Photoshop</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>PHP</li>
    <li>Bootstrap</li>
    </ul>
    <a href="project/unprotected-victims.html"><button class="btn">View</button></a>
    <a href="https://github.com/isaackweb/UnProtected-Victims.git" target="_blank"><button style="margin-left:3%;" class="btn">Source Code</button></a>
    </div>
    <div class="project-image">
        <img src="images/project-unprotected.png" alt="Unprotected Victims Web Application">
    </div>`
  );

}
projectTab();

// project filter
$(document).ready(function(){
  $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if (value == 'All'){
          $('.other-project-images').show('1000');
      }else {
          $('.other-project-images').not('.'+value).hide('1000');
          $('.other-project-images').filter('.'+value).show('1000');
      }
  })
})

// toggle filter catagory
function myFilter() {
  var element = document.getElementById("myfilter");
  element.classList.toggle("true-filter");
}
myFilter();

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