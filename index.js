const btnNode = document.querySelector('.js-btn');
const qwestNode = document.querySelector('.js-question');
const findDoNode = document.querySelector('.js-findDo');
const backgroundNode = document.querySelector('.js-container')

btnNode.addEventListener('click', function() {
  fetch("http://www.boredapi.com/api/activity?type=diy") 
  .then(res =>res.json()) 
  .then((data) => {
   findDoNode.innerText = data.activity;
   qwestNode.innerText = 'Ура, теперь не скучно 🔥';
   backgroundNode.classList.toggle('container_app')

    })
  })

  
 
 
  