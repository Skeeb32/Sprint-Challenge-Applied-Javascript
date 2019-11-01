// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response);
    //bootstrap, javascript, jquery, node, technology
    response.data.articles.bootstrap.forEach(item => {
      cardsContainer.appendChild(createCard(item));
    });
    response.data.articles.javascript.forEach(item => {
        cardsContainer.appendChild(createCard(item));
      });
      response.data.articles.jquery.forEach(item => {
        cardsContainer.appendChild(createCard(item));
      });
      response.data.articles.node.forEach(item => {
        cardsContainer.appendChild(createCard(item));
      });
      response.data.articles.technology.forEach(item => {
        cardsContainer.appendChild(createCard(item));
      });
  });
const cardsContainer = document.querySelector('.cards-container');

function createCard(object) {
  const card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imageContainer = document.createElement('div'),
    image = document.createElement('img'),
    theAuthorName = document.createElement('span');

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imageContainer);
  author.appendChild(theAuthorName);
  imageContainer.appendChild(image);

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imageContainer.classList.add('img-container');

  theAuthorName.textContent = object.authorName;
  image.src = object.authorPhoto;
  headline.textContent = object.headline;

  return card;
}
