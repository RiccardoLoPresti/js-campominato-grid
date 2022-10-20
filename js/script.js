/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/
const btn = document.getElementById('play')
const container = document.querySelector('.container');
const squareForRow = document.getElementById('level').value;

btn.addEventListener('click', function(){
  init()
  console.log(squareGen());
});


/**
 * Funzione di inizializazione
 */
function init() {
  container.innerHTML = '';
  //salvo il numero dei quadratini
  const totalSquare = squareTot(squareForRow);
  //salvo il numero totale dei quadratini
  const squares = squareGen(totalSquare);
}

/**
 * Calcola il numero massimo dei quadratini
 * @param {number} numberSquareForRow 
 * @returns totale Square
 */
function squareTot(numberSquareForRow){
  return totSquare = Math.pow(numberSquareForRow, 2);
}

/**
 * Genera il numero di quadrati necesari e lo stampa in HMTL facendo cambiare colore al click della casella
 * @param {number} nSquare 
 * @returns square stampati in html
 */
function squareGen(nSquare){
  let square;
  for(let i = 0; i < nSquare; i++){
    let square = document.createElement('div');
    square.className = "square";
    square.style.width = `calc(100% / ${squareForRow}`
    square.style.height = `calc(100% / ${squareForRow}`
    container.append(square);
    square.idSq = i + 1;
    square.addEventListener('click', function(){
      square.innerText = i + 1;
      square.classList.add('color')
      console.log(this.idSq);
    })
  }
  return;
}

function squareSize(squareForRow) {
  
}