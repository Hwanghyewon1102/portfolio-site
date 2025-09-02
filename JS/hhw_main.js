const header = document.querySelector('header');
const abouth2 = document.querySelector('.about h2')



window.addEventListener('scroll', function(){
  console.log(this.window.scrollY); // Y축 스크롤 위치

  if(this.window.scrollY >= 500){
  header.style.display = 'flex';
  header.style.opacity = '1';
  

  }else{
  header.style.display = 'none';
  header.style.opacity = '0';
  }
});










// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용
console.log(new Date().getFullYear());
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


const toTopEl = document.querySelector('#toTop')
const visualInner = document.querySelector('.visual > .inner');

window.addEventListener('scroll', () => {
  
  if (window.scrollY <= 500) {
    visualInner.classList.add('moveBackground');
    }else{
      visualInner.classList.remove('moveBackground');

    }
  
});