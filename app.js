// global variables
window.addEventListener('load', init)

const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}


let currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay  = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#time');


const words = [  
    'avada',
    'kedavra',
    'harry',
    'ron',
    'dumbledore',
    'hedwig',
    'parsel mouth',
    'hagrid',
    'hermoine',
    'gryffindor',
    'slytherin',
    'hogwarts',
    'ravenclaw',
    'hufflepuff',
    'boggart',
    'broom',
    'butterbeer',
    'bludger',
    'quidditch',
    'rememberal',
    'seeker',
    'sickle',
    'knut',
    'spellotape',
    'transfiguration',
    'triwizard',
    'snatchers',
    'unspeakables',
    'diagon alley',
    'werewolf',
    'polyjuice',
    'sneakoscope',
    'portkey',
    'potions',
    'snape',
    'quibbler',
    'daily prophet',
    'patronus',
    'pheonix',
    'pensive',
    'muggle',
    'mandrake',
    'nimbus',
    'magical me',
    'lupin',
    'malfoy',
    'lord voldemort',
    'mudblood',
    'gillyweed',
    'firebolt',
    'dissapparate',
    'death eaters',
    'dark mark',
    'charms',
    'blastended scroots',
    'butter beer',
    'animagus',
    'acromantula',
    'chaser',
    'fang',
    'deathly hallows',
    'deluminator',
    'auror',
    'crab',
    'goyle',
    'horcrux',
    'dementor'

];

// difficulty
document.getElementById('easybtn').addEventListener('click', () => { currentLevel = levels.easy });

document.getElementById('mediumbtn').addEventListener('click', () => { currentLevel = levels.medium });

document.getElementById('hardbtn').addEventListener('click', () => { currentLevel = levels.hard });

document.getElementById('reset').addEventListener('click', init);
// initialize game
function init () {
    resetGame();
    myTimer();
    
}

resetGame = () => {
    time = currentLevel;
    seconds.innerHTML = time;
    showWords(words);
// start matching on word input
    wordInput.addEventListener('input', startMatch);
// countdown every second
// check game status
    setInterval(checkStatus, 100);
}

startMatch = () => {
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWords(words);
        wordInput.value = '';
        score++;
    }
    // if score is -1, display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
 
}

// match current word to input
matchWords = () => {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'correct!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}
// pick & show word

showWords = (words) => {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

// countdown timer


countdown = () => {
    if (time > 0) {
        time--
    } else if (time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
    if (4 <= time && time >= 3) {
        document.getElementById('time').style.color = '#white';
    } else if (3 >= time) {
        document.getElementById('time').style.color = '#e74c3c';

}
}
let interval = null; 
myTimer = () => {
    clearInterval(interval)
    interval = setInterval(countdown, 1000);
}

// check game status
checkStatus = () => {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over';
        score = -1;
    }
}

