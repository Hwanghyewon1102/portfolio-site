const visualImg = document.querySelector('.visual');
const moonImg = document.querySelector('.visual .moon');
const Description = document.querySelectorAll('.Description p')

moonImg.addEventListener('mouseover', function () {
  visualImg.classList.add('back-img');
  Description.forEach(function(description) {
    description.style.display = 'flex';
  });
});

moonImg.addEventListener('click', function () {
  visualImg.classList.remove('back-img');
  Description.forEach(function(description) {
  description.style.display = 'none';
  });
});




