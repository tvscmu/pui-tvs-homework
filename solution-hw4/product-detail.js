//-------Populate the options-------
class Glazing {
    name;
    glazingPrice;

    constructor(gname, gprice) {
    this.name = gname;
    this.glazingPrice = gprice;
    }
}
const keepOrg= new Glazing("Keep Original",0.00);
const sugaMilk= new Glazing("Sugar Milk",0.00);
const vanMilk= new Glazing("Vanilla Milk", 0.50);
const douChoc= new Glazing("Double Chocolate", 1.50);

const glazingArr=[keepOrg,sugaMilk,vanMilk,douChoc];

let glazeOp=document.getElementById("Glazingop");
for(let i=0;i<glazingArr.length;i++) {
    let glaze=document.createElement("option");
    glaze.textContent=glazingArr[i].name;
    glazeOp.appendChild(glaze);
}

class Packsize {
    size;
    packPrice;

    constructor(psize, pprice) {
    this.size = psize;
    this.packPrice = pprice;
    }
}
const one= new Packsize ("1",1);
const three= new Packsize("3",3);
const six= new Packsize("6",5);
const twelve= new Packsize("12",10);

const packArr=[one,three,six,twelve];

let packOp=document.getElementById("sizeop");
for(let i=0;i<packArr.length;i++) {
    let pack =document.createElement("option");
    pack.textContent=packArr[i].size;
    packOp.appendChild(pack);
}

//-------Calculating total price-------

const basePrice=2.49;
let pPrice=1;
let gPrice=0;
let glazing="Keep Original";
let pack=1;

function Glazechange(element) {
    //console.log('is it working?G');
    const gC=element.value;
    glazing=element.value;

    for(let i=0;i<glazingArr.length;i++) {
        if(glazingArr[i].name==gC) {
            gPrice=glazingArr[i].glazingPrice;
            
        }
    }

    calcTotal();
}

function Packchange(element) {
    //console.log('is it working?p');
    const pC=element.value;
    pack=element.value;

    for(let i=0;i<packArr.length;i++) {
        if(packArr[i].size==pC) {
            pPrice=packArr[i].packPrice;
        }
    }

    calcTotal();
}

function calcTotal(){
    let total= ((rolls[rollType].basePrice + gPrice)* pPrice).toFixed(2);
    //console.log(total);
    document.getElementById("totalPrice").innerHTML = "$" + total;
}

//---------Homework 4------------

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

//get h1
// let title = document.querySelector("h1");
// console.log(title);

// //get img class
// let rollimage = document.querySelector(".img");
// console.log(rollimage);

// //get totalPrice
// let bprice = document.querySelector(".pricing");
// console.log(bprice);

// console.log(rollType);
// console.log(rolls[rollType].basePrice);
// console.log(rolls[rollType].imageFile);

document.querySelector("h1").innerHTML= rollType +" Cinnamon Roll";
document.querySelector(".img").src= rolls[rollType].imageFile;
document.querySelector(".pricing").innerHTML= "$"+rolls[rollType].basePrice;

let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function add2cart() {
    let rollObject= new Roll(rollType,glazing,pack,rolls[rollType].basePrice);
    cart.push(rollObject);
    console.log(cart);
    

}
