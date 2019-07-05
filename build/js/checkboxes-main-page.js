let labels = document.querySelectorAll('.ch-boxes'),
    checkBoxes = document.querySelectorAll('.checkboxes'),
    avail = document.querySelectorAll('.avail'),
    availabilityCheckboxes = document.querySelectorAll('.availability__checkboxes');
    
for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener('click', function(evt) {
    checkBoxes[i].classList.toggle('checkboxes__checked');
  });
}

for (let i = 0; i < avail.length; i++) {
  avail[i].addEventListener('click', function() {
    availabilityCheckboxes[i].classList.toggle('availability__checkboxes-checked');
  });
}




  