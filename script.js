// =========================
// Scroll To Top Button
// =========================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

// =========================
// Sticky Navbar
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

    }

    else{

        header.style.boxShadow = "none";

    }

});

// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// =========================
// Typing Animation
// =========================

const typingText = document.getElementById("typing-text");

const words = [
    "Frontend Developer",
    "B.Tech CSE Student",
    "JavaScript Learner",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){

        typingText.textContent = currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }

    else{

        typingText.textContent = currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex === words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,isDeleting?60:120);

}

typeEffect();


// =========================
// Scroll Reveal
// =========================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((element)=>{

    observer.observe(element);

});


// =========================
// Dark / Light Mode
// =========================

const themeToggle = document.getElementById("theme-toggle");

const themeIcon = themeToggle.querySelector("i");

// Load saved theme
if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-theme");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

}

themeToggle.addEventListener("click", ()=>{

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){

        localStorage.setItem("theme","light");

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

    }

    else{

        localStorage.setItem("theme","dark");

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

    }

});