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
          document.querySelector(".settings").classList.toggle("settings-active");
        }

        // if (event.target.classList.contains('open-modal')) {
        //   modal.style = "display: flex";
        // }
        // if (event.target.classList.contains('modal-close') || event.target.id === "modal") {
        //   modal.style = "";
        // }

        if (event.target.classList.contains('message__settings_img')) {
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
                <div class="message__settings_item">
                  <img src="../assets/img/prstar4.jpg">
                  <h3 class="glass">Prstar</h3>
                </div>
                <div class="message__settings_item">
                  <img src="../assets/img/prstar4.jpg">
                  <h3 class="glass">Prstar</h3>
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

        if (event.target.classList.contains('tag__close') || event.target.classList.contains('tag__close_img')) {
          console.log(event.target);
          event.target.parentElement.parentElement.remove();
        };
        break;
    }
  }
}

let navEvent = new NavEvent;
document.addEventListener('click', navEvent);

if (document.querySelector('.fileInput')) {
  document.querySelector('.fileInput').addEventListener('dragenter', () => {
    document.querySelector('.fileInput__zone').classList.add('active');
  });

  document.querySelector('.fileInput').addEventListener('dragleave', () => {
    document.querySelector('.fileInput__zone').classList.remove('active');
  });
}

/* код модального окна */

document.querySelectorAll('.open-modal').forEach(i => i.addEventListener('click', () => {
  const modalId = i.dataset.modal

  document.getElementById(modalId).style.display = "flex";

  document.querySelectorAll('.modal__close').forEach(i => i.addEventListener('click', () => document.getElementById(modalId).style.display = ""));

  document.querySelectorAll('.modal__wrapper').forEach(i => i.addEventListener('click', () => document.getElementById(modalId).style.display = ""));

  // закоментил так как мне нужно было значение из массива в модальное перекинуть, а тут для теста берется первое в DOM
  // document.querySelector('.changeCity').value = `${i.childNodes[2].innerText}`;
  // document.querySelector('.changeStreet').value = `${i.childNodes[4].innerText}`;
})
)

/* код dropdown */

document.querySelectorAll('.dropdown__menu').forEach(i => {
  i.addEventListener('click', () => {
    document.querySelectorAll('.dropdown__menu_arrow').forEach(i => i.classList.toggle('active'))
    document.querySelectorAll('.dropdown__list').forEach(i => i.classList.toggle('active'))
  })
})

