class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".navlist",
  ".navlist a",
);
mobileNavbar.init();


function startModal (modalID) {
  const modal = document.getElementById(modalID)

  if(modal) {
    modal.classList.add('show')
    modal.addEventListener('click', (event) => {
      if (event.target.id == modalID || event.target.id == 'submit') {
      modal.classList.remove('show')
      }
    })
  }
}

const buttonSignUp = document.querySelector('.btn-up')
buttonSignUp.addEventListener('click', () => startModal('modal'))



