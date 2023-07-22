// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
  links = document.querySelector('.links');
  navLinks = document.querySelectorAll('.links a');
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);
  
  document.body.classList.add("stop-scrolling");

  const onAnimationEnd = (event) => {
    // Check if the event target is the same as the cloned element (to avoid unrelated animations)
    if (event.target === clone) {
      document.body.classList.remove("stop-scrolling");
      clone.removeEventListener("animationend", onAnimationEnd); // Remove the event listener after handling the correct animation
      big_wrapper.remove();
      clone.classList.remove("copy");
      // Reset Variables
      declare();
      events();
    }
  };

  clone.addEventListener("animationend", onAnimationEnd);
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });

  // Add event listener to each navigation link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (big_wrapper.classList.contains("active")) {
        big_wrapper.classList.remove("active");
      }
    });
  });
}


events();

  function scrollToTop(event) {
    event.preventDefault(); 

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const toTop = document.querySelector(".to-top");

  toTop.addEventListener("click", scrollToTop);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.style.display = "block";
    } else {
      toTop.style.display = "none";
    }
  });