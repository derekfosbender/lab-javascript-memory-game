const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
     
      console.log(`Card clicked: ${card}`);
    
      card.classList.toggle("turned");
// to turn card over intially
      memoryGame.pickedCards.push(card);

      if(memoryGame.pickedCards.length === 2){
        const card1 = memoryGame.pickedCards[0];
        const card2 = memoryGame.pickedCards[1];

        const card1Name = card1.getAttribute("data-card-name");
        const card2Name = card2.getAttribute("data-card-name");

        if(memoryGame.checkIfPair(card1Name, card2Name)){
          card1.classList.add("blocked");
          card2.classList.add("blocked");
        } else {
          setTimeout(() => {
            card1.classList.toggle("turned");
            card2.classList.toggle("turned");
          }, 1000)
        }
// if flipped and doesnt match add ,1000 before turns over or else won't be able to have 2 open at same time
// if same stay open (card1 = card2)
        memoryGame.pickedCards = [];

        document.getElementById("pairs-clicked").innerText = memoryGame.pairsClicked;
        document.getElementById("pairs-guessed").innerText = memoryGame.pairsGuessed;

        if(memoryGame.checkIfFinished()){
          alert("You are Winner")
        }

      }
    });
  });
});
