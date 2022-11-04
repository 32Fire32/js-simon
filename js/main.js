'strict mode'

const contain = document.querySelector(".container");
let userNumber;
let userNumberArray = [5
];

// Mi creo l'array di 5 numeri casuali e univoci
let ranNamArr = [];
let i = 0;
while ( ranNamArr.length < 5 ){
    i++;
    let random = (Math.floor(Math.random() * 100) + 1);
    if (ranNamArr.includes(random) === false ){
        ranNamArr.push(random);
    }
}
console.log("L'array di numeri casuali è " + ranNamArr);

//stampo i 5 numeri casuali in pagina

for ( let i = 0; i < ranNamArr.length; i++){
    let contNumber = document.createElement("div");
    contain.append(contNumber);
    contNumber.innerHTML = ranNamArr[i];
}

//il timeout che fa scomparire i numeri
setTimeout(function(){
    contain.classList.add("hide");
    document.querySelector("h1").innerHTML = "???????????";
}, 3000);

// qui chiedo all'utente di scrivere i numeri che ricorda
setTimeout(function(){
    for (i = 0; i < 5; i++){
        userNumber = Number(prompt("Inserisci il numero"));
        userNumberArray.push(userNumber);
    }
    console.log("Questi sono i numeri inseriti dall'utente " + userNumberArray);

}, 4000);

