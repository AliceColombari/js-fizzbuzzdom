// numeri multipli di 3 colore verde
// numeri multipli di 5 colore giallo
// numeri multipli di 3 e 5 colore rosso

/* Applica uno stile differente a seconda del valore dell’indice 
   per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5. */

var boxContainer = document.getElementById('container');

for (let i = 1; i <= 100; i++) {
    console.log (i);
    
    var fizzBuzz;

    // multipli di 3 e 5 stampo fizzbuzz
    if (i % 3 == 0 && i % 5 == 0) {
        fizzBuzz = 'fizzbuzz';
        console.log(fizzBuzz);
      // multipli di 3 stampo fizz
    } else if (i % 3 == 0) {
        fizzBuzz = 'fizz';
        console.log(fizzBuzz);
      // multipli di 5 stampo buzz
    } else if (i % 5 == 0) {
        fizzBuzz = 'buzz';
        console.log(fizzBuzz);
      // numeri che non corrispondono ai multipli di 3 e 5 sono numeri normali
    } else {
        fizzBuzz = i;
        console.log(i);
    }

    /* operazione di concatenazione di stringa */
    // div con class box + class 'fizz' 'buzz' 'fizzbuzz' + variabile fizzBuzz
    // class 'fizz' 'buzz' 'fizzbuzz' = variabile fizzBuzz -> fizzBuzz = 'fizzbuzz'; / fizzBuzz = 'fizz'; / fizzBuzz = 'buzz';

    boxContainer.innerHTML += `<div class="box ${fizzBuzz}">${fizzBuzz}</div>`;
}