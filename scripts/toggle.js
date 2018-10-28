const toggle = document.getElementsByClassName('toggle')[0];
const bar = document.getElementsByClassName('bar')[0];
const icon = toggle.getElementsByTagName('i')[0];

let opened = false;

toggle.onclick = () => {
  bar.classList.toggle('open');

  icon.className = opened ? icon.className.replace(/up/, 'down') : icon.className.replace(/down/, 'up');
  opened = !opened;
};
