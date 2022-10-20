/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

//1. generare una griglia dinamicamente ( quindi imposto quanti quadrati devo mettere su una riga [10])
//2 creo l'elemento square in modo dinamico con un ciclo.
//3. numero i quadrati con una funzione da min a max [1 a 100]
//4. ogni casella deve emettere il suo valore .this in console
//5. la casella cliccata si colora

const container = document.querySelector('.container');
const square = document.createElement('div');

square.className = "square";
container.append(square);

const squareForRow = 10;


function init(){
  
}

function squareGen(numberSquareForRow){
  return totalSquare = Math.pow(numberSquareForRow, 2);
}

console.log(squareGen(5));