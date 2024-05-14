function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

const nameElement = document.getElementById('typing-name');
const cursorElement = document.getElementById('cursor-blnk');
const name = "Sarvesh Wanzare";
let index = 0;

function type() {
    if (index < name.length) {
        nameElement.innerHTML += name.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
    } else {
        cursorElement.style.display = 'inline-block'; // Show cursor after typing finishes
    }
}

type();