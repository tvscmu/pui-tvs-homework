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

function Glazechange(element) {
    //console.log('is it working?G');
    const gC=element.value;

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

    for(let i=0;i<packArr.length;i++) {
        if(packArr[i].size==pC) {
            pPrice=packArr[i].packPrice;
        }
    }

    calcTotal();
}

function calcTotal(){
    let total= ((basePrice + gPrice)* pPrice).toFixed(2);
    //console.log(total);
    document.getElementById("totalPrice").innerHTML = "$" + total;
}

