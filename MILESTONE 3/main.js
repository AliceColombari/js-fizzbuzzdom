// scrivi programma che stampa i numeri da 1 a 100
// numeri multipli di 3 stampo in console fizz
// numeri multipli di 5 stampo in console buzz
// numeri multipli di 3 e 5 stampo in console fizzbuzz

for (let i = 1; i <= 100; i++) {
    console.log (i);
    
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
}