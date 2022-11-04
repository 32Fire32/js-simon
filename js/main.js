'strict mode'

// Mi creo l'array di 5 numeri casuali e univoci
let ranNamArr = [];
let i = 0;
while ( ranNamArr.length < 5 ){
    i++;
    let random = (Math.floor(Math.random() * 100) + 1);
    // ranNamArr.push(random);
    if (ranNamArr.includes(random) === false ){
        ranNamArr.push(random);
        // console.log(randomNumber);
    }
}

console.log(ranNamArr);