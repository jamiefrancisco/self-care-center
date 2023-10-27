
var receiveMessageButton = document.querySelector('.receive-message-button');
var affirmationSelection = document.querySelector('#affirmation');
var mantraSelection = document.querySelector('#mantra');
var mantraMessage = document.querySelector('.mantra-message');



var mantras = [];
var currentMessage = "";




receiveMessageButton.addEventListener('click', generateRandomMantra)

function showMessage() {
}

function generateRandomMantra(event) {
    event.preventDefault();
    var mantra = mantras[getRandomIndex(mantras)];
    mantraMessage.innerText = mantra;
    console.log(mantra);
    
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }