// appendi un elemento html con il numero o la stringa corretta - visibilità

// richiamo il container attraverso una variabile
const boxContainer = document.getElementById('container');

// suddivisione in base ai multipli con ciclo for + condizione
for (let i = 1; i <= 100; i++) {
    console.log (i);
    
    // variabile
    let fizzBuzz;

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

    //boxContainer.innerHTML = boxContainer.innerHTML + "<div class='box'>" + i + "</div>";
    boxContainer.innerHTML += "<div class='box'>" + i + "</div>";

}