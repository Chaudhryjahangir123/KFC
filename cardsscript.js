var container= document.getElementById("container")
var cardno ="8"
var heads=['Zingeratha','Krunch Burger + Drink ','Krunch With Fries N Drink','Chicken N chips ','3 Piece chicken','Krunch chicken combo','Krunch Burger','Rice N Spice']
var loi=['./sss/bur.png','./sss/bg1.png','./sss/bg2.png','./sss/bg3.png','./sss/bg4.png','./sss/bg5.png','./sss/burgir.png','./sss/chawal.png']
var content=['Crispy chicken, sliced onions tangy imli chutney, mint mayo wrapped in a soft paratha','1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink','Krunch + 1 regular Fries + 1 regular Drink','2 pieces of Hot and Crispy Fried Chicken+ fries+ dinner roll+ signature Vietnamese Sauce','3 pieces of Hot and Crispy Fried Chicken','1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 regular drink','Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun','Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce']
var listofcards=[]
var price =["Rs 560","Rs 560","Rs 560","Rs 560","Rs 560","Rs 560","Rs 560","Rs 560"]
for (let index = 0; index < cardno; index++) {
    var ptag= document.createElement("div")
    var card = document.createElement("div")
    var imgs= document.createElement("img")
    var cname = document.createElement("p")
    var cont = document.createElement("p")
    var button = document.createElement("button")
    var bcon =document.createElement("p")
    var pr =document.createElement("p")

    card.setAttribute('id', `card${index + 1}`);
    imgs.src=loi[index]
    card.appendChild(imgs)
    card.appendChild(cname)
    card.appendChild(cont)
    card.appendChild(ptag)
    ptag.appendChild(pr)
    ptag.appendChild(button)
    button.appendChild(bcon)
    bcon.innerHTML= "Add to Bucket";
    pr.innerHTML=price[index]
    cont.innerHTML=content[index]
    cname.innerHTML=heads[index]
    cname.style.color='black'
    cont.style.color='black'
    cont.style.textAlign='center'
    cont.style.width='90%'
    
    
    cont.style.height="80px"
    container.appendChild(card)
    card.style.display='flex'
    ptag.style.display='flex'
    ptag.style.alignItems='center'
    ptag.style.marginTop='20px'

    ptag.style.justifyContent='space-around'
    pr.style.color='black'
    pr.style.fontSize='24px'





    card.style.backgroundColor='white'
    cname.style.fontSize='24px'
    cont.style.fontSize='20px'
    
    card.style.flexDirection='column'
    card.style.alignItems='center'
    card.style.justifyContent='center'
    card.style.width= "324.392px";
    card.style.gap= "10px";

    ptag.style.width= "100%";

    card.style.height= "513.968px";

    card.style.borderRadius= "50px";
    button.style.width= "120px";
    button.style.height= "40px";
    button.style.borderRadius= "15px";
    button.style.backgroundColor= "#FFB737";
    button.style.border= "none";
    button.style.color= "white";
    button.style.fontSize= "14px";


    
    imgs.style.width='300px'
    imgs.style.height='250px'
    imgs.style.marginBottom='30px'


    imgs.style.borderRadius='50px'
    imgs.style.backgroundColor='red'



    
    
}
