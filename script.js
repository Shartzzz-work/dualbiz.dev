// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav__menu");
// const navLink = document.querySelectorAll(".nav-link");
// const navImg = document.querySelector(".nav__user-img");
// let dropdownMenu = document.querySelector(".nav__dropdown")

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// });

// navLink.forEach(n => n.addEventListener("click", () => {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// }));

// // navImg.addEventListener("mouseover", ()=> {
// //   // alert("hi")
// //   dropdownMenu.style.display = 'block';
// // }
// // );

// // navImg.addEventListener("mouseout", () => {
// //   dropdownMenu.style.display = 'none';
// // }
// // );

// const navEvents = () => document.querySelector(".nav__user")
//   .addEventListener('mouseover', (event) => {
//     if (event.target.classList.contains('nav__user-img')) {
//       dropdownMenu.style.display = 'block';
//     }
//   });

// navEvents();



// const navEvents = (selector, event, listener) => document.querySelector(selector).addEventListener(event, listener);

// const navOver = navEvents(
//   "#header",
//   "mouseover",
//   (event) => {
//     if (event.target.classList.contains('nav__user-img')) {
//       document.querySelector(".nav__dropdown").style.display = 'block';
//     }
//   }
// );

// let eventArr = ["click", "mouseover", "mouseout"];

// const navEvents = (selector, event, listener) => document.querySelector(selector).addEventListener(event, listener);

// const listner = (event) => console.log(event)

// const navOver = navEvents(
//   "#header",
//   eventArr[0],
//   (event) => listner(event)
// );

class NavEvent {
  handleEvent(event) {

    let dropdown = document.createElement('div');
    dropdown.className = "nav__dropdown";

    switch (event.type) {
      case 'click':
        console.log("кликнули", event.target);
        if (event.target.classList.contains('hamburger') || event.target.classList.contains('bar')) {
          document.querySelector(".hamburger").classList.toggle("active");
          document.querySelector(".nav__menu").classList.toggle("active");
        }
        break;
      case 'mouseover':
        // if (event.target.classList.contains('nav__user-img')) {
        //   document.querySelector(".nav__dropdown").style.display = 'block';
        // }
        if (event.target.classList.contains('nav__user-img')) {
          console.log("hi");
          header.append(dropdown);
        }
        if (event.target.classList.contains('settings_icon')) {
          header.append(dropdown);
        }
        break;
      case 'mouseout':
        if (event.target.id === "header") {
          // document.querySelector(".nav__dropdown").style.display = 'none';
          document.querySelector(".nav__dropdown").remove();
        }
        break;
    }
  }
}

let navEvent = new NavEvent;
header.addEventListener('click', navEvent);
header.addEventListener('mouseover', navEvent);
header.addEventListener('mouseout', navEvent);

