let total=0.0;

let glazingPriceAdp= {
    "Keep Original":0.0,
    "Vanilla Milk":0.0,
    "Sugar Milk":0.5,
    "Double Chocolate":1.5
}

let packPriceAdp={
    1:1,
    3:3,
    6:5,
    12:10
}

//Array to keep orders 
let cart=[];

if((localStorage.getItem("cart"))!=null) {

    const rollOrd=localStorage.getItem("cart");
    const obj=JSON.parse(rollOrd);

    for(let i=0; i< obj.length; i++) {
        cart.push(obj[i]);
    }
}

let Fcart= new Set();

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}


function findPrice(basePrice,glazPrice,packPrice) {
    return((basePrice+glazPrice)*packPrice).toFixed(2);
}


for (let i=0; i<cart.length; i++){

    Fcart.add(cart[i]);
    let temp= document.querySelector("template");
    let itemClone= temp.content.cloneNode(true);

    console.log(itemClone);

    itemClone.querySelector(".naam").innerText=cart[i].type +" Cinnamon Roll";
    itemClone.querySelector(".glaz").innerText="Glazing: "+ cart[i].glazing;
    itemClone.querySelector(".pack").innerText="Pack Size: "+cart[i].size;
    itemClone.querySelector(".img").src=rolls[cart[i].type].imageFile;

    let glazPrice=glazingPriceAdp[cart[i].glazing];
    let packPrice=packPriceAdp[cart[i].size];
    let rollPrice=parseFloat(findPrice(cart[i].basePrice, glazPrice,packPrice));

    itemClone.querySelector(".prce").innerText="$" + rollPrice;
    total=total+rollPrice;
    document.querySelector(".price").innerText="$"+ total;

    let rItem= itemClone.querySelector(".cart");

    itemClone.querySelector(".removeButton").onclick=(()=> {
        rItem.remove();

        total=(total-rollPrice).toFixed(2);
        document.querySelector(".price").innerText="$" +total;
        console.log("working or not??");

        Fcart.delete(cart[i]);

        const upArray=Array.from(Fcart);
        const cartStr= JSON.stringify(upArray);

        localStorage.setItem("cart",cartStr);

    });

    document.querySelector(".finalCart").appendChild(itemClone);
}


//console.log(template);


let element=clone.querySelector("#naam");


console.log(element);
//console.log();
