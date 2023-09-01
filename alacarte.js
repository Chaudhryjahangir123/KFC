var container2 = document.getElementById("container2");
var cardno = 8;
var heads2 = ['Zingeratha', 'Krunch Burger + Drink', 'Krunch With Fries N Drink', 'Chicken N chips', '3 Piece chicken', 'Krunch chicken combo', 'Krunch Burger', 'Rice N Spice'];
var loi2 = ['./sss/bur.png', './sss/bg1.png', './sss/bg2.png', './sss/bg3.png', './sss/bg4.png', './sss/bg5.png', './sss/burgir.png', './sss/chawal.png'];
var content2 = ['Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha', '1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink', 'Krunch + 1 regular Fries + 1 regular Drink', '2 pieces of Hot and Crispy Fried Chicken+ fries+ dinner roll+ signature Vietnamese Sauce', '3 pieces of Hot and Crispy Fried Chicken', '1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink', 'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun', 'Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce'];
var listofcards2 = [];
var price2 = ["Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560", "Rs 560"];

for (let index = 0; index < cardno; index++) {
    var ptag2 = document.createElement("div");
    var card2 = document.createElement("div");
    var imgcont2 = document.createElement("div");
    var imgs2 = document.createElement("img");
    var cname2 = document.createElement("p");
    var cont2 = document.createElement("p");
    var button2 = document.createElement("button");
    var bcon2 = document.createElement("p");
    var pr2 = document.createElement("p");

    card2.setAttribute('id', `card${index + 1}`);
    imgs2.src = loi2[index]; // Use loi2 array for image source
    card2.appendChild(imgcont2);
    card2.appendChild(cname2);
    card2.appendChild(cont2);
    card2.appendChild(ptag2);
    ptag2.appendChild(pr2);
    ptag2.appendChild(button2);
    button2.appendChild(bcon2);
    imgcont2.appendChild(imgs2);
    bcon2.innerHTML = "Add to Bucket";
    pr2.innerHTML = price2[index]; // Use price2 array for price
    cont2.innerHTML = content2[index]; // Use content2 array for content
    cname2.innerHTML = heads2[index]; // Use heads2 array for headings
    cname2.style.color = 'black';
    cont2.style.color = 'black';
    cont2.style.textAlign = 'center';
    cont2.style.width = '90%';
    cont2.style.height = "80px";

    container2.appendChild(card2);
    card2.style.display = 'flex';
    ptag2.style.display = 'flex';
    ptag2.style.alignItems = 'center';
    ptag2.style.marginTop = '20px';
    ptag2.style.justifyContent = 'space-around';
    pr2.style.color = 'black';
    pr2.style.fontSize = '24px';

    card2.style.backgroundColor = 'white';
    cname2.style.fontSize = '24px';
    cont2.style.fontSize = '20px';
    card2.style.flexDirection = 'column';
    card2.style.alignItems = 'center';
    card2.style.justifyContent = 'center';
    card2.style.width = "324.392px";
    card2.style.gap = "10px";
    ptag2.style.width = "100%";

    card2.style.height = "513.968px";

    card2.style.borderRadius = "50px";
    button2.style.width = "120px";
    button2.style.height = "40px";
    button2.style.borderRadius = "15px";
    button2.style.backgroundColor = "#FFB737";
    button2.style.border = "none";
    button2.style.color = "white";
    button2.style.fontSize = "14px";

    imgs2.style.width = '300px';
    imgs2.style.height = '250px';
    imgcont2.style.marginBottom = '30px';
    imgcont2.style.marginTop = '-13px';
    imgcont2.style.borderRadius = '50px';
    imgcont2.style.backgroundColor = 'red';
    imgcont2.style.width = '300px';
    imgcont2.style.height = '250px';
    imgcont2.style.display = 'flex';
    imgcont2.style.alignItems = 'center';

    listofcards2.push(card2);
}

console.log(listofcards2);

function enter(card) {
    var clickedCard = card.currentTarget;
    var selectedimg = clickedCard.getElementsByTagName("img")[0];
    clickedCard.style.transform = "scale(1.05)";
    selectedimg.style.transform = "scale(1.2)";
    selectedimg.style.padding = "scale(1.1)";
    clickedCard.style.transition = ".1s ease .1s";
    selectedimg.style.transition = ".1s ease .1s";
    clickedCard.style.boxShadow = "5px 5px 15px grey";
}

function leave(card) {
    var clickedCard = card.currentTarget;
    var selectedimg = clickedCard.getElementsByTagName("img")[0];
    clickedCard.style.transform = "scale(1)";
    clickedCard.style.boxShadow = "0px 0px 0px";
    selectedimg.style.transform = "scale(1)";
}

listofcards2.forEach(function (card) {
    card.addEventListener("mouseenter", enter);
    card.addEventListener("mouseleave", leave);
});
