/**Author: Youssef Laamim
  Copyright (c) 2023. All rights reserved. */

  document.getElementById('servings').addEventListener('input', updateIngredients);
  document.getElementById('add-review-btn').addEventListener('click', addReview);
  function updateIngredients() {
    const servingsInput = document.getElementById('servings');
    const servings = parseInt(servingsInput.value);
  
    const ingredientsList = document.getElementById('ingredients-list');
    const ingredients = ingredientsList.getElementsByTagName('li');
  
    const originalIngredients = [
        '100 g Roasted hazelnuts',
        '250 g Svenskt Smör från Arla®',
        '2 dl Kakao',
        '4 Egg',
        '4½ dl Powdered sugar',
        '10 g Svenskt Smör från Arla®',
        '½ tsk Salt',
        '2 krm Vanilla powder',
        '3 dl Flour',
        '½ tsk Baking Soda',
        '1½ dl Mixed seeds, e.g. flax seeds, sunflower seeds, pumpkin seeds'
    ];
  
    for (let i = 0; i < ingredients.length; i++) {
        const ingredientParts = originalIngredients[i].split(' ');
        const quantity = parseInt(ingredientParts[0]);
        const unit = ingredientParts.slice(1).join(' ');
  
        const updatedQuantity = quantity * servings;
        ingredients[i].textContent = `${updatedQuantity} ${unit}`;
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
  
          reviewInput.value = '';
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
  
  setInterval(changeImage, 10000);
  