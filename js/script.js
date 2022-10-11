const tripLenght = 30;
const userAge = 10;
const kilometerPrice = 0.21;
const youngDiscount = 0.2;
const agedDiscount = 0.4;

const pricePerKilometer = tripLenght * kilometerPrice;

console.log('Lunghezza del viaggio:', tripLenght);
console.log('Età del passeggero:', userAge);
console.log('Prezzo pieno:', pricePerKilometer);

if(userAge >= 65){
    let agedPrice = pricePerKilometer - pricePerKilometer * agedDiscount;
    console.log('Prezzo per over 65:', agedPrice);
}else if(userAge <= 18){
    let youngPrice = pricePerKilometer - pricePerKilometer * youngDiscount;
    console.log('Prezzo per under 18:', youngPrice);
}else{
    console.log('Prezzo pieno:', pricePerKilometer);
}


