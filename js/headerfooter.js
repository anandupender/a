var nav = document.getElementById("nav");
nav.innerHTML = `
  <div id="logo">
    <a class="name" href="index.html">
      <h1 class="menu-buttons name animated fadeInDown">Anand Upender</h1>
    </a>
    <span id="logo-subtitle">futures designer + prototyper</span>
  </div>
  <div id="menu">
    <a href="work.html">
      <h1 class="menu-buttons" id="work">Work</h1>
    </a>
    <!-- <a href="experiments.html">
      <h1 class="menu-buttons" id="experiments">Experiments</h1>
    </a> -->
    <a href="about.html">
      <h1 class="menu-buttons" id="about">About</h1>
    </a>
  </div>
  <a href="javascript:void(0);" class="icon" onclick="responsiveMenu()">
    <i class="fa fa-bars"></i>
  </a>
`

function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "topNav") {
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
}

var footer = document.getElementById("footer");
footer.innerHTML = `
  <a class="bottom-button" target="_blank" href="mailto:anandx@stanford.edu"><div class="animated fadeInUp delay-1s">Email</div></a>
  <a class="bottom-button" target="_blank" href="https://drive.google.com/file/d/1vM6shkculwaScg8uXhQqi_6Atj0RV6TX/view?usp=sharing"><div class="animated fadeInUp delay-1s">Resume</div></a>
  <div class="bottom-button bottom-button-large animated fadeInUp delay-1s">Made from scratch with &#9829;</div>
  <a class="bottom-button" target="_blank" href="https://www.github.com/anandupender"><div class="animated fadeInUp delay-1s">Github</div></a>
  <a class="bottom-button" target="_blank" href="https://www.linkedin.com/in/anandupender/"><div class="animated fadeInUp delay-1s">Linkedin</div></a>
`