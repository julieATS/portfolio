function tryWord(word, base) {
	// TODO: fix jeu sensible à la casse.
	if (word === base) {
		return true
  } 
  else {
  	let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
  	let arrayBase = base.split('');
    let arrayWord = word.split('');
    
    for (let i = 0; i < arrayBase.length-1; i++) {
      if (arrayBase.includes(arrayWord[i])=== true) {
    	  if (arrayBase[i] === arrayWord[i]) {
      	  wellPlaced.push(arrayWord[i]);
          console.log("w",wellPlaced)
        }	
        else {
        missplaced.push(arrayWord[i])
        console.log("m",missplaced)
        }
      }
    	else if (arrayBase.includes(arrayWord[i]) === false) {
      	notInWord.push(arrayWord[i])
        console.Console("n",notInWord)
      }
    
    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
    }
  }
}

function guess() {
  let base = 'dictionnaire'
	let word = document.getElementById("word").value
	let result = tryWord(word, base)
  document.getElementById("word").value = ''
 	document.getElementById("try").innerText = word
  if (result === true) {
	  document.getElementById("win").innerText = 'Vous avez gagné'
    document.getElementById("well").innerText = ''
    document.getElementById("miss").innerText = ''
    document.getElementById("not").innerText = ''
  }
  else {
    document.getElementById("win").innerText = ''
    document.getElementById("well").innerText = 'Bien placé: '+result.wellPlaced.join(', ')
    document.getElementById("miss").innerText = 'Mal placé: '+result.missplaced.join(', ')
    document.getElementById("not").innerText = 'Pas dans le mot: '+result.notInWord.join(', ')
  }
}