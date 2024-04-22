function form() {

  const validateName = (name) => {
    if (name.length >= 2 && name.length < 50) {
      return name.match(
        /^[а-яА-Яa-zA-Z]/
      );
    }
    if(name.length == name.match(/[^0-9'".]/)){
      return false;
    }
  }

  const validatePhone = (tel) => {
    if (tel.length == 11) {
      return tel.match(/^[0-9]/);
    } else return false;
  };

  const nameItem = $('.form__item-name')
  const phoneItem = $('.form__item-phone')

  const validatedName = function() {
    const name = $(this).val();

    if (validateName(name)) {
      $(this).removeClass('error').addClass('success');
      nameItem.removeClass('error').addClass('success');
    } else {
      $(this).addClass('error').removeClass('success');
      nameItem.addClass('error').removeClass('success');
    }
    if (name == '') {
      $(this).removeClass('error').removeClass('success');
      nameItem.removeClass('error').removeClass('success');
    }
    return false;
  }

  const validatedPhone = function() {
    const tel = $(this).val();

    if (validatePhone(tel)) {
      $(this).removeClass('error').addClass('success');
      phoneItem.removeClass('error').addClass('success');
    } else {
      $(this).removeClass('success').addClass('error');
      phoneItem.removeClass('success').addClass('error');
    }
    if (tel == '') {
      $(this).removeClass('error').removeClass('success');
      phoneItem.removeClass('error').removeClass('success');
    }
    return false;
  }

  $('input[name="name"]').on('input', function() {
    validatedName.call(this);
  });
  $('input[name="tel"]').on('input', function() {
    validatedPhone.call(this);
  });
}
form();