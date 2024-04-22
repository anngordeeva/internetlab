import { disablePageScroll, enablePageScroll } from "scroll-lock";

function toggleMenu() {
  const button = $('.header__burger');
  const menu = $('.header__nav');
  const logo = $('.header__logo');
  const header = $('.header');

  button.on('click', function() {
    if (button.hasClass('active')) {
      button.removeClass('active');
      menu.removeClass('active');
      logo.removeClass('active');
      header.removeClass('active');
      enablePageScroll();
    } else {
      button.addClass('active');
      menu.addClass('active');
      logo.addClass('active');
      header.addClass('active');
      disablePageScroll();
    }
  });
  $(document).on('mouseup', function(e) {
    if (!button.is(e.target) && button.has(e.target).length === 0) {
      button.removeClass('active');
      menu.removeClass('active');
      logo.removeClass('active');
      header.removeClass('active');
      enablePageScroll();
    }
  });
}
toggleMenu();