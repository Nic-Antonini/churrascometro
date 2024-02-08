//Sobre o sistema:
//Carne - 400 g por pessoa + de 6 horas - 650
//Cerveja 1200 ml por pessoa + 6 horas - 2000 ml
//Refrigerante/Água - 1000 ml por pessoa + 6 horas - 1500 ml

// crianças valem por 0.5

let inputAdult = document.getElementById("adult");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result")

function calculate(){
    let adult = inputAdult.value;
    let children = inputChildren.value;
    let duration = inputDuration.value;
    let amountOfMeat = meatPerPerson(duration) * adult + (meatPerPerson(duration) / 2 * children)
    let amountOfBeer = beerPerPerson(duration) * adult //Criança nao bebe cerveja KKKKK
    let amountOfDrink = drinkPerPerson(duration) * adult + (drinkPerPerson(duration) / 2 * children)

    result.innerHTML = `<center><p>${amountOfMeat / 1000} kg de carne</p></center>`
    result.innerHTML += `<center><p>${Math.ceil(amountOfBeer / 355)} latas de cerveja</p></center>`
    result.innerHTML += `<center><p>${Math.ceil(amountOfDrink / 2000)} garrafas de 2L de bebida</p></center>`

}

function meatPerPerson(duration){
    if(duration >= 6){
        return 650;
    } else {
        return 400;
    }
}

function beerPerPerson(duration){
    if(duration >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function drinkPerPerson(duration){
    if(duration >= 6){
        return 1500;
    } else {
        return 1000;
    }
}