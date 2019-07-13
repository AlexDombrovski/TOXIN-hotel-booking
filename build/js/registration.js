let nameInput = document.querySelector('.name'),
    surnameInput = document.querySelector('.surname'),
    gender = document.querySelectorAll('.label-of'),
    genderInput = document.querySelectorAll('.genderinput'),
    buttonToggle = document.querySelector('.toggle'),
    buttonToggleOff = document.querySelector('.toggle-of'),
    buttonPay = document.querySelector('.new-account__button');

  

// choice of a gender
for(let i = 0; i < gender.length; i++) {
  gender[i].addEventListener('click', function(evt) {
    gender[i].classList.toggle('label-on');
  })
}


// datepicker for registration page
$(function() {
  $('#booking-dates').daterangepicker({
    opens: 'right',
    locale: {
      format: 'DD.MM.YYYY'
    }
  });
});

// choice of special offer
buttonToggle.addEventListener('click', function (evt) {
    buttonToggleOff.classList.toggle('toggle-on');
});


// result (click on buttonPay)
buttonPay.addEventListener('click', function (evt) {
  evt.preventDefault();
  let nameValue = nameInput.value,
      surnameValue = surnameInput.value;
  if (nameInput || surnameInput) {
    console.log(nameValue, surnameValue);
  }
});