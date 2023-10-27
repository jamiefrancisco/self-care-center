var receiveMessageButton = document.querySelector('.receive-message-button');
var affirmationSelection = document.querySelector('#affirmation');
var mantraSelection = document.querySelector('#mantra');
var affirmationMessage = document.querySelector('.affirmation-message');
var mantraMessage = document.querySelector('.mantra-message');
var meditateLogo = document.querySelector('img');

var mantras = [];
var affirmations = [];

receiveMessageButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (affirmationSelection.checked) {
        show(affirmationMessage);
        hide(mantraMessage);
        displayRandomAffirmation();
    } else if (mantraSelection.checked) {
        show(mantraMessage);
        hide(affirmationMessage);
        displayRandomMantra();
    }
})

function displayRandomAffirmation() {
    hide(meditateLogo);
    var affirmation = affirmations[getRandomIndex(affirmations)];
    affirmationMessage.innerText = affirmation;
}

function displayRandomMantra() {
    hide(meditateLogo);
    var mantra = mantras[getRandomIndex(mantras)];
    mantraMessage.innerText = mantra;
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function show(element) {
    element.classList.remove('hidden');
}

function hide(element) {
    element.classList.add('hidden');
}