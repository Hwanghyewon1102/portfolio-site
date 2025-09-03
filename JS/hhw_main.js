const header = document.querySelector('header');
const abouth2 = document.querySelector('.about h2')



window.addEventListener('scroll', function(){
  // console.log(this.window.scrollY); // Y축 스크롤 위치

  if(this.window.scrollY >= 500){
  header.style.display = 'flex';
  header.style.opacity = '1';
  

  }else{
  header.style.display = 'none';
  header.style.opacity = '0';
  }
});



// Swiper 사용
const swiper = new Swiper('.project .swiper', {
  // 슬라이드 옵션 지정
  direction: 'horizontal', // 수평 슬라이드
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 다시 1
  // autoplay: { // 자동 재생 여부
  //   delay: 5000 // 5초마다 슬라이드 바뀜
  // },

  // 페이지네이션 옵션
  pagination: {
    el: '.project .swiper-pagination',
    clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
  },

  // 이전/다음 슬라이드 버튼 옵션
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  },
});


const projectimg1 = document.querySelector('#project .project1');
const projectimg2 = document.querySelector('#project .project2');
const projectimg3 = document.querySelector('#project .project3');
const projectimg4 = document.querySelector('#project .project4');

const project1 = document.querySelector('#project .num1');
const project2 = document.querySelector('#project .num2');
const project3 = document.querySelector('#project .num3');
const project4 = document.querySelector('#project .num4');

projectimg1.addEventListener('click', function(){
  project1.classList.remove('num1')
  project1.style.display = 'flex';

  project2.style.display = 'none';
  project3.style.display = 'none';
  project4.style.display = 'none';

  project2.classList.toggle('num2');
  project3.classList.toggle('num3');
  project4.classList.toggle('num4');

})
projectimg2.addEventListener('click', function(){
  project2.classList.remove('num2')
  project2.style.display = 'flex';

  project1.style.display = 'none';
  project3.style.display = 'none';
  project4.style.display = 'none';

  project1.classList.toggle('num1');
  project3.classList.toggle('num3');
  project4.classList.toggle('num4');

})

projectimg3.addEventListener('click', function(){
  project3.classList.remove('num3')
  project3.style.display = 'flex';

  project1.style.display = 'none';
  project2.style.display = 'none';
  project4.style.display = 'none';

  project1.classList.toggle('num1');
  project2.classList.toggle('num2');
  project4.classList.toggle('num4');

})

projectimg4.addEventListener('click', function(){
  project4.classList.remove('num4')
  project4.style.display = 'flex';

  project1.style.display = 'none';
  project2.style.display = 'none';
  project3.style.display = 'none';

  project1.classList.toggle('num1');
  project2.classList.toggle('num2');
  project3.classList.toggle('num3');

})


const projectimg = document.querySelectorAll('.projectimg li');

projectimg.forEach(function(e){
  e.addEventListener('mousehover')
})





// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용
console.log(new Date().getFullYear());
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


