// create a container element for the carousel
const carousel = document.createElement('div');
carousel.classList.add('carousel');

// create a review element for each review
const review1 = document.createElement('div');
review1.classList.add('review');
review1.innerText = 'Review 1';

const review2 = document.createElement('div');
review2.classList.add('review');
review2.innerText = 'Review 2';

const review3 = document.createElement('div');
review3.classList.add('review');
review3.innerText = 'Review 3';

// add the review elements to the carousel
carousel.appendChild(review1);
carousel.appendChild(review2);
carousel.appendChild(review3);

// add the carousel to the page
document.body.appendChild(carousel);
