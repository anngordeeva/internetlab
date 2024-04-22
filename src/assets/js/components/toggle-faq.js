function toggleQuestions() {
  let button = $('.faq__item__header');
  button.on('click', function () {
    $(this).parent().toggleClass('active');
    button.not(this).parent().removeClass('active');
  });
}
toggleQuestions();