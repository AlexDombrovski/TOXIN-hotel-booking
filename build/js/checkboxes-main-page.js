let labels = document.querySelectorAll('.ch-boxes'),
    checkBoxes = document.querySelectorAll('.checkboxes');
    //labelCheck = document.querySelector('.checked'),
    //checkboxesChecked = document.querySelector('.checkboxes__checked');
    
    
for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener('click', function(evt) {
    checkBoxes[i].classList.toggle('checkboxes__checked');
  });
}

//labelCheck.addEventListener('click', function(evt) {
  //checkboxesChecked.classList.toggle('checkboxes');
//})




  