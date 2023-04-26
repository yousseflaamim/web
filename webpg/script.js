const menu =document.getElementById("menu");
const action = document.getElementById("action");

menu.addEventListener("click",()=>{
    hundleMenu();
})
function hundleMenu(){
    
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}
/*..........*/
const items = document.querySelectorAll('.food-slider .food-item');
let currentItem = 0;
const intervalTime = 5000;

function changeItem() {
  items[currentItem].classList.remove('active');
  currentItem = (currentItem + 1) % items.length;
  items[currentItem].classList.add('active');
}

setInterval(changeItem, intervalTime);



///////anmtion
// Select all dropdowns in the footer
var dropdowns = document.querySelectorAll('.footer-links');

// Loop through the dropdowns
dropdowns.forEach(function(dropdown) {
  // Add an event listener to each dropdown
  dropdown.addEventListener('click', function(event) {
    // Get the target of the click event
    var target = event.target;
    // If the target is an anchor tag
    if (target.tagName.toLowerCase() === 'a') {
      // Get the parent list item of the anchor tag
      var parent = target.parentNode;
      // If the parent has the class 'dropdown'
      if (parent.classList.contains('dropdown')) {
        // Toggle the 'open' class on the parent
        parent.classList.toggle('open');
      }
    }
  });
});
//.........................qustion
// Add click event listener to accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Toggle active class on body element of clicked header
        const accordionBody = header.nextElementSibling;
        accordionBody.classList.toggle('active');
    });
});

// Add submit event listener to add question form
const addQuestionForm = document.getElementById('add-question-form');
addQuestionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Get value of question input
    const questionInput = document.getElementById('question');
    const question = questionInput.value;
    // Clear question input
    questionInput.value = '';
    // Create new question element and append to accordion
    const newQuestionHeader = document.createElement('h2');
    newQuestionHeader.classList.add('accordion-header');
    newQuestionHeader.textContent = question;
    const newQuestionBody = document.createElement('div');
    newQuestionBody.classList.add('accordion-body');
    newQuestionBody.textContent = 'إجابة على السؤال.';
    const accordion = document.querySelector('.accordion');
    accordion.insertBefore(newQuestionBody, addQuestionForm);
    accordion.insertBefore(newQuestionHeader, newQuestionBody);
});

function addQuestion() {
    // get the question input value
    var question = document.getElementById("question").value;

    // create a new h2 element for the question
    var newQuestion = document.createElement("h2");
    newQuestion.innerText = question;

    // create a new p element for the answer
    var newAnswer = document.createElement("p");
    newAnswer.innerText = "سيتم الرد على هذا السؤال في أقرب وقت ممكن.";

    // get the body element and add the new elements to it
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(newQuestion);
    body.appendChild(newAnswer);
}


