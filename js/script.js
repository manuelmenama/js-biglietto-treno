const tripLenght = prompt('Distanza da percorrere (in km):')
const userAge = prompt('Scrivi qui la tua età:')
const kilometerPrice = 0.21;
const youngDiscount = 0.2;
const agedDiscount = 0.4;

const pricePerKilometer = tripLenght * kilometerPrice;

console.log('Lunghezza del viaggio:', tripLenght);
console.log('Età del passeggero:', userAge);
console.log('Prezzo pieno:', pricePerKilometer);

if(userAge >= 65){
    let agedPrice = pricePerKilometer - pricePerKilometer * agedDiscount;
    let agedPriceFixed = agedPrice.toFixed(2);
    document.getElementById('text').innerHTML = `
        Prezzo con sconto del ${agedDiscount * 100}% per over 65: ${agedPriceFixed}
    `;

    console.log('Prezzo per over 65:', agedPriceFixed);
}else if(userAge <= 18){
    let youngPrice = pricePerKilometer - pricePerKilometer * youngDiscount;
    let youngPriceFixed = youngPrice.toFixed(2);
    document.getElementById('text').innerHTML = `
    Prezzo con sconto del ${youngDiscount * 100}% per under 18: ${agedPrice}
`;
    
    console.log('Prezzo per under 18:', youngPriceFixed);
}else{

    let pricePerKilometerFixed = pricePerKilometer.toFixed(2);
    document.getElementById('text').innerHTML = `
        Il prezzo del suo biglietto è: ${pricePerKilometerFixed}
    `;
    console.log('Prezzo pieno:', pricePerKilometerFixed);
}


