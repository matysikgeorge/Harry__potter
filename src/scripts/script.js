let data = [];

function getData() {
  fetch("https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((response) => cardRender(response));
}
getData() // - вызов функции 

// import data from "./json/characters.json" with {type: "json"}
// console.log(data);

const cardsSectionNode = document.querySelector(".cards__section");


// - создание шаблона для карточек актеров
function createHeroCard(array) {
  console.log(array);
  
  const { actor, alive, gender, house, image, name, wand:{core}} = array;
  const heroCard = document.createElement("div");
  heroCard.className = "cards__wrapper";
  heroCard.innerHTML = `
  <article class="cards">
  <img
                  class="cards__img"
                  src=${image}
                />
                <div class="cards__text-block">
                  <h2 class="cards__hero"> ${name}</h2>
                  <p class="cards__name">Actor: ${actor}</p>
                  <p class="cards__gender">Gender: ${gender}</p>
                  <p class="cards__faculty">House: ${house}</p>
                  <p class="cards__wand">Wand core: ${core}</p>
                  <p class="cards__life">Alive: ${alive}</p>
                </div>
                </article>
  `;
  return heroCard;
}

// - функция отрисовки карточек
function cardRender(data) {
  cardsSectionNode.innerHTML = "";
  data.forEach((element) => {
    const heroCard = createHeroCard(element);
    cardsSectionNode.append(heroCard);
  });
}

// верстку доделать карточки, и поиск по людям,