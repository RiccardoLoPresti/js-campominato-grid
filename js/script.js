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
const squareForRow = 10;

//salvo il numero massimo dei quadratini
const totalSquare = squareTot(squareForRow);
const squares = squareGen(totalSquare)

console.log(maxSquare);


/**
 * Calcola il numero massimo dei quadratini
 * @param {number} numberSquareForRow 
 * @returns 
 */
function squareTot(numberSquareForRow){
  return totSquare = Math.pow(numberSquareForRow, 2);
}

function squareGen(nSquare){
  for(let i = 0; i < nSquare; i++){
    const square = document.createElement('div');
    square.className = "square";
    container.append(square);
  }

  return square;
}