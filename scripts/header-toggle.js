$(document).ready(() => {
  const toggle = $('.bar-toggle');
  const bar = $('.bar');

  toggle.on('click', () => {
    bar.toggleClass('open')
  })
});
