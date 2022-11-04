'strict mode'

const contain = document.querySelector(".container");
let userNumber;
let userNumberArray = [];
let ranNamArr = [];
let i = 0;
let gotNumbers = [];

// Mi creo l'array di 5 numeri casuali e univoci
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

    // condizioni di vittoria o sconfitta
for ( let i = 0; i < ranNamArr.length; i++){
    if (userNumberArray.includes(ranNamArr[i])){
        console.log(ranNamArr[i]);
        gotNumbers.push(ranNamArr[i]);
    }  
}
    alert(`i numeri ricordati sono ${gotNumbers.length} e sono ${gotNumbers}`);
    console.log("I numeri ricordati sono " + gotNumbers); 
    
    if ( gotNumbers.length === ranNamArr.length) {
        alert("complimenti hai ricordato tutti i numeri!")
        contain.classList.remove("hide");
    }

}, 4000);





