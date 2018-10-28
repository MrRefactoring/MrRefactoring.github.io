const sticky = document.getElementsByClassName('sticky')[0];

window.onscroll = () => {
  const scroll = window.pageYOffset;

  if (scroll < 245) {
    sticky.classList.remove('stick');
  } else {
    sticky.classList.add('stick');
  }
};
