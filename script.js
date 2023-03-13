/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

*BONUS 1:*
Crea un container nel DOM , aggiungendo (attraverso la funzione append() o innerHTML) un elemento html con il numero o la stringa corretta da mostrare.


*BONUS 2:*
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.*/

//1. Creo un <div> che funge da container
var container = document.createElement("div");

//2. Aggiungiamo il container alla pagina
document.body.appendChild(container);

//3. Creo un ciclo for che va da 1 a 100, creando un nuovo elemento HTML per ogni numero e aggiungendolo al container
for (var i = 1; i <= 100; i++) {
  var element = document.createElement("div");
  //Nel caso in cui il numero generato è un multiplo di 5 e di 3 crea un elemento con "Fizzbuzz"
  if (i % 3 === 0 && i % 5 === 0) {
    element.innerHTML = "FizzBuzz";
  }
  //Nel caso in cui il numero generato è solo multiplo di 3 crea un elemento "Fizz"
  else if (i % 3 === 0) {
    element.innerHTML = "Fizz";
  }
  //Nel caso in cui il numero generato è solo multiplo di 5 crea un elemento "Buzz"
  else if (i % 5 === 0) {
    element.innerHTML = "Buzz";
  } else {
    element.innerHTML = i;
  }
  //aggiungo ogni nuovo elemento tramite la funzione appendchild
  container.appendChild(element);
}
