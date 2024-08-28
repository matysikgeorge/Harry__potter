let data = [];

function getData() {
  fetch("https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((response) => cardRender(response));
}
getData() // - вызов функции 

// import data from "./json/characters.json" with {type: "json"}
// console.log(data);

const cardsWrapperNode = document.querySelector(".cards__wrapper");


// - создание шаблона для карточек актеров
function createHeroCard(array) {
  console.log(array);
  
  const { actor, alive, gender, house, image, name, wand:{core}} = array;
  const heroCard = document.createElement("article");
  heroCard.className = "card";
  heroCard.innerHTML = `<img
                  class="card__img"
                  src=${image}
                />
                <div class="card__text-block">
                  <h2 class="card__hero"> ${name}</h2>
                  <p class="card__name">Actor: ${actor}</p>
                  <p class="card__gender">Gender: ${gender}</p>
                  <p class="card__faculty">House: ${house}</p>
                  <p class="card__wand">Wand core: ${core}</p>
                  <p class="card__life">Alive: ${alive}</p>
                </div>
  `;
  return heroCard;
}

// - функция отрисовки карточек
function cardRender(data) {
  cardsWrapperNode.innerHTML = "";
  data.forEach((element) => {
    const heroCard = createHeroCard(element);
    cardsWrapperNode.append(heroCard);
  });
}

// верстку доделать карточки, и поиск по людям,