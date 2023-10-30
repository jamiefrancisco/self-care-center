var affirmationSelection = document.querySelector('#affirmation');
var mantraSelection = document.querySelector('#mantra');
var receiveMessageButton = document.querySelector('.receive-message-button');
var meditateLogo = document.querySelector('img');
var affirmationMessage = document.querySelector('.affirmation-message');
var mantraMessage = document.querySelector('.mantra-message');

var mantras = [];
var affirmations = [];

receiveMessageButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (affirmationSelection.checked) {
        show(affirmationMessage);
        hide(mantraMessage);
        document.body.classList.remove('gradient-reverse');
        document.body.classList.remove('gradient-normal');
        document.body.classList.add('gradient-alternate');
        displayRandomAffirmation();
    } else if (mantraSelection.checked) {
        show(mantraMessage);
        hide(affirmationMessage);
        document.body.classList.remove('gradient-normal');
        document.body.classList.remove('gradient-alternate');
        document.body.classList.add('gradient-reverse');
        displayRandomMantra();
    }
    buttonAnimation();
})

function buttonAnimation() {
    receiveMessageButton.classList.add('button-animation');

    setTimeout(function () {
        receiveMessageButton.classList.remove('button-animation');
    }, 2000);
}


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
    element.animate([
        { color: 'white' },
        { color: 'black' }
    ], {
        duration: 8000,
    });
}

function hide(element) {
    element.classList.add('hidden');
    element.classList.remove('fade-in');
}