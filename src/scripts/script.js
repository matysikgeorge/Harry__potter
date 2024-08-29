let data = [];

//- функция
async function getData() {
  try {
    const API = await fetch(
      "https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters"
    );
    data = await API.json();
    cardRender(data);
  } catch (err) {
    console.log(err);
  }
}
getData(); // - вызов функции

// import data from "./json/characters.json" with {type: "json"}
// console.log(data);

const cardsSectionNode = document.querySelector(".cards__wrapper");

// - создание шаблона для карточек актеров
function createHeroCard(array) {
  const {
    actor,
    alive,
    gender,
    house,
    image,
    name,
    wand: { core },
  } = array; //- деструкторизация
  const heroCard = document.createElement("article");
  heroCard.className = "card";
  heroCard.innerHTML = `
  <img
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
  cardsSectionNode.innerHTML = '';
  data.forEach((element) => {
    const heroCard = createHeroCard(element);
    cardsSectionNode.append(heroCard);
  });
}

const inputNode = document.querySelector(".form__input__name");

// - функция поиска по героям
function cardFind(str) {
  // let result = event.target.value.toLowerCase().trim();  
  let newData = data.filter((el) =>
    el.name.toLowerCase().includes(str.toLowerCase())
  );
  cardRender(newData);
}

inputNode.addEventListener("input", (event) => cardFind(event.target.value.trim()));

// верстку доделать карточки, и поиск по людям,
