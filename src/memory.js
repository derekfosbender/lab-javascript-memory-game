class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
  if (!this.cards){
    return undefined;
  }
  for (let i=0; i<this.cards.length; i++){
    let random = Math.floor(Math.random() * this.cards.length); 
    let chosenCard = this.cards[i];
    this.cards[i] = this.cards[random];
    this.cards[random] = chosenCard;
  }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++;

    if (card1 === card2) {
      this.pairsGuessed ++;
      return true;
    }else{
      return false
    }
  }
  checkIfFinished() {
if (this.pairsGuessed === this.cards.length/2){
return true
  }else {
    return false 
  }
}
}