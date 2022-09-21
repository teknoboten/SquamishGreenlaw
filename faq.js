// const quickViewButtons = document.querySelectorAll('[data-quick-view]');
// const closeButtons = document.querySelectorAll('[data-close]');

const questions = document.querySelectorAll('.question'); //faq headers


questions.forEach( open => {
  open.addEventListener('click', (e) => {

    const expandMe = e.target;
    const answer = expandMe.nextElementSibling;

    //toggle classes
    answer.classList.toggle("hidden");
    // expandMe.classList.remove("btn-faq");
    // expandMe.classList.add("btn-faq-selected");
    expandMe.classList.toggle('btn-faq');
    console.log(expandMe);
  })
}); 

// console.log(questions);