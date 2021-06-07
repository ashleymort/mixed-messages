let planet = ['the Moon\!', 'Venus\!', 'Mars\!', 'Mercury\!', 'Saturn\!', 'Jupiter\!', 'Neptune\!'];

let luck = ['You will be extra lucky today\!', 'You will be out of luck today\!',
    'You will be super unlucky today\!', 'Luck may not be on your side\!',
    'Good luck you are going to need it\!', 'Your luck might just be in\!',
    'Be lucky\!', 'You will not be lucky today\!',
    'Your lucl will depend on the toss of a coin\!',
    'Hold your breath and you might be lucky\!', 'You will be super lucky today\!',
    'Lady Luck is on your side\!'];

let tips = ['Watch out for black cats\!', 'Drink plenty of water\!',
    'Five a day keeps you fit and healthy\!', 'An apple a day keeps the doctor away\!',
    'If you see a solo magpie salute it\!', 'Keep things simple\!',
    'Go for that run today\!', 'Treat your loved ones\!',
    '50 press ups a day will give you great guns\!', 'Look before you walk\!',
    'Don\'t walk underneath any ladders\!', 'Watch out for Grey cats\!'
];

function newPlanet() {
    let generateRandomNum = Math.floor(Math.random() * (planet.length));

    document.getElementById('rulingPlanet').innerHTML = 'Your ruling planet is ' + planet[generateRandomNum];
} newPlanet();

function newLuck() {
    let generateRandomNum = Math.floor(Math.random() * (luck.length));

    document.getElementById('luckFactor').innerHTML = luck[generateRandomNum];
} newLuck();

function newTips() {
    let generateRandomNum = Math.floor(Math.random() * (tips.length));

    document.getElementById('topTips').innerHTML = tips[generateRandomNum];
} newTips();