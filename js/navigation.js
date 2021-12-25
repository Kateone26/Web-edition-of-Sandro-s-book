const navigation = document.getElementById('navigation');
// modal variables
const menuModal = document.querySelector('.menu-modal-wrapper');
const modalCloseButton = document.querySelector('.close-menu-button');
const mainMenuButton = document.querySelector('.main-menu-button');
// navigation titles
const contentHeaderText = document.getElementById('contentHeaderText');
const aboutUsText = document.getElementById('aboutUsText');
// selected navigation contents
const contentDisplay = document.getElementById('contentDisplay');
const aboutText = document.getElementById('about-text');

aboutUsText.addEventListener('click', () => {
  // this callback function adds about us active class
  contentHeaderText.classList.remove('active-menu-button');
  aboutUsText.classList.add('active-menu-button');
  // content display disappear here
  contentDisplay.style.display = 'none';
  // about lorem text appear here
  aboutText.style.display = 'block';
});

contentHeaderText.addEventListener('click', () => {
  // this callback function removes about us active class
  contentHeaderText.classList.add('active-menu-button');
  aboutUsText.classList.remove('active-menu-button');
  //  content display appear here
  contentDisplay.style.display = 'flex';
  // about lorem text disappear here
  aboutText.style.display = 'none';
});

setTimeout(() => {
  navigation.style.opacity = '1';
  navigation.style.pointerEvents = 'all';
}, 2700);

// menu modal open
mainMenuButton.addEventListener('click', () => {
  menuModal.classList.add('menu-active');
  modalCloseButton.style.pointerEvents = 'all';
});
// menu modal close
modalCloseButton.addEventListener('click', () => {
  if (menuModal.classList.contains('menu-active')) {
    menuModal.classList.remove('menu-active');
  }
});
