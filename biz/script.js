class NavEvent {
  handleEvent(event) {

    switch (event.type) {
      case 'click':
        if (event.target.classList.contains('hamburger') || event.target.classList.contains('bar')) {
          document.querySelector(".hamburger").classList.toggle("active");
          document.querySelector(".nav__menu").classList.toggle("active");
        }
        if (event.target.classList.contains('settings_icon')) {
          document.querySelector(".settings").classList.toggle("active");
        }
        break;
      case 'mouseover':
        if (event.target.classList.contains('nav-link')) {
          console.log(event);
          document.querySelector(".nav__menu").insertAdjacentHTML('afterbegin', `
            <span class="nav__menu-span"></span>
          `);
        }
        break;
      case 'mouseout':
        break;
    }
  }
}

let navEvent = new NavEvent;
header.addEventListener('click', navEvent);
header.addEventListener('mouseover', navEvent);
header.addEventListener('mouseout', navEvent);
