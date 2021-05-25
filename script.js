let bool = false;

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

        if (event.target.classList.contains('message__settings')) {
          bool = !bool;
          console.log(bool);
          if (bool == true) {
            document.querySelector(".message__body").insertAdjacentHTML('afterbegin',
              `
              <div class="message__settings-active">
                <div class="message__settings_item">
                  <img src="../assets/img/prstar1.jpg">
                  <h3 class="glass">Prstar</h3>
                </div>
                <div class="message__settings_item active">
                  <img src="../assets/img/prstar2.jpg">
                  <h3 class="glass">Active</h3>
                </div>
                <div class="message__settings_item">
                  <img src="../assets/img/prstar4.jpg">
                  <h3 class="glass">Prstar</h3>
                </div>
              </div>
            `
            );
          } else {
            document.querySelector(".message__settings-active").remove();
          }
        }
        break;
    }
  }
}

let navEvent = new NavEvent;
document.addEventListener('click', navEvent);