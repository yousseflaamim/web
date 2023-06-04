// script.js

document.getElementById('servings').addEventListener('input', updateIngredients);
document.getElementById('add-review-btn').addEventListener('click', addReview);

function updateIngredients() {
    const servingsInput = document.getElementById('servings');
    const servings = parseInt(servingsInput.value);

    const ingredientsList = document.getElementById('ingredients-list');
    const ingredients = ingredientsList.getElementsByTagName('li');

    for (let i = 0; i < ingredients.length; i++) {
        const ingredient = ingredients[i].textContent;
        const quantity = parseInt(ingredient.split(' ')[0]);
        const updatedQuantity = quantity * servings;

        ingredients[i].textContent = updatedQuantity + ingredient.substring(ingredient.indexOf(' '));
    }
}
function addReview() {
    const reviewInput = document.getElementById('review-input');
    const reviewText = reviewInput.value;

    if (reviewText !== '') {
        const reviewsList = document.getElementById('reviews-list');
        const newReview = document.createElement('li');
        newReview.textContent = reviewText;
        reviewsList.appendChild(newReview);

        reviewInput.value = ''; // لإعادة تفريغ حقل إدخال المراجعة
    }
}
//moveimg
const images = ['img/lakrim.jpg', 'img/kika2.jpg', 'img/baghrir.jpg'];
let currentImageIndex = 0;
const recipeImages = document.querySelectorAll('.recipe-images img');

function changeImage() {
  recipeImages.forEach((image, index) => {
    if (index === currentImageIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });

  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
}

setInterval(changeImage, 10000); // تغيير الصورة كل 10 ثوانٍ
