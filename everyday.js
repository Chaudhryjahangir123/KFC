var containers = document.querySelector(".containers");
var aleCarteBtn = document.querySelector(".alacarte");
var evDBtn = document.querySelector(".Everydayvalue");
var childRen = [];
var pages = [
  {
    pageName: "everyDayValue",
    button: evDBtn,
    list: [
      {
        image: "./everyday/bur.png",
        title: "Zingeratha",
        description:
          "Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha",
        price: 10.99,
      },
      {
        image: "./everyday/bur.png",
        title: "Krunch Burger + Drink",
        description:
          "Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha",
        price: 11.99,
      },
      {
        image: "./everyday/bur.png",
        title: "Krunch With Fries N Drink",
        description:
          "Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha",
        price: 12.99,
      },
      {
        image: "./everyday/bur.png",
        title: "Zingeratha",
        description:
          "Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha",
        price: 10.99,
      },
      {
        image: "./everyday/bur.png",
        title: "Krunch Burger + Drink",
        description:
          "Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha",
        price: 11.99,
      },
      {
        image: "./everyday/bur.png",
        title: "Krunch With Fries N Drink",
        description:
          "Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha",
        price: 12.99,
      },
    ],
  },
  {
    pageName: "aleCarte",
    button: aleCarteBtn,
    list: [
      {
        image: "./everyday/bur.png",
        title: "Zingerasdasdasd",
        description:
          "Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha",
        price: 10.99,
      },
      {
        image: "./everyday/bur.png",
        title: "Krunasffasfurger + Drink",
        description:
          "Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha",
        price: 11.99,
      },
      {
        image: "./everyday/bur.png",
        title: "Krasfasfasfasfh Fries N Drink",
        description:
          "Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha",
        price: 12.99,
      },
      {
        image: "./everyday/bur.png",
        title: "Zingsdfdsfhghfhfbfbdfvha",
        description:
          "Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha",
        price: 10.99,
      },
      {
        image: "./everyday/bur.png",
        title: "Krunch Burger + Drink",
        description:
          "Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha",
        price: 11.99,
      },
      {
        image: "./everyday/bur.png",
        title: "Krunsdfsdfsdfies N Drink",
        description:
          "Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha",
        price: 12.99,
      },
    ],
  },
];

function listTile(index, image, title, desc, price) {
  let ptag = document.createElement("div");
  let card = document.createElement("div");
  let imgs = document.createElement("img");
  let cname = document.createElement("p");
  let cont = document.createElement("p");
  let button = document.createElement("button");
  let bcon = document.createElement("p");
  let pr = document.createElement("p");
  card.style.backgroundColor = "#ff000033";
  card.setAttribute("id", `card${index}`);
  card.className = "card";
  imgs.src = image;
  imgs.className = "img";
  card.appendChild(imgs);
  card.appendChild(cname);
  card.appendChild(cont);
  card.appendChild(ptag);
  ptag.appendChild(pr);
  ptag.classList.add("ptag");
  ptag.appendChild(button);
  button.classList.add("button");
  button.appendChild(bcon);
  bcon.innerHTML = "Add to Bucket";
  pr.innerHTML = price;
  pr.className = "price";
  cont.className = "content";
  cont.innerHTML = desc;
  cname.className = "cname";
  cname.innerHTML = title;
  function enter(card) {
    var clickedCard = card.currentTarget; // Use currentTarget to refer to the card element
    var selectedimg = clickedCard.getElementsByTagName("img")[0]; // Get the image element inside the card

    clickedCard.style.transform = "scale(1.05)";
    selectedimg.style.transform = "scale(1.2)";
    selectedimg.style.padding = "scale(1.1)";
    clickedCard.style.cursor = "pointer";

    clickedCard.style.transition = ".1s ease .1s";
    selectedimg.style.transition = ".1s ease .1s";

    clickedCard.style.boxShadow = "5px 5px 15px grey";
  }

  function leave(card) {
    var clickedCard = card.currentTarget; // Use currentTarget to refer to the card element
    var selectedimg = clickedCard.getElementsByTagName("img")[0]; // Get the image element inside the card

    clickedCard.style.transform = "scale(1)";
    clickedCard.style.boxShadow = "0px 0px 0px";
    selectedimg.style.transform = "scale(1)";
  }

  card.addEventListener("mouseenter", enter);
  card.addEventListener("mouseleave", leave);

  return card;
}

pages.forEach((element, pageIndex) =>
  element.button.addEventListener("click", () => {
    childRen = pages[pageIndex].list.map((elem, index) =>
      listTile(index, elem.image, elem.title, elem.description, elem.price)
    );
    containers.innerHTML = "";
    childRen.forEach((e) => containers.appendChild(e));
  })
);
