// changed object information
const reviews = [
  {
    id: 1,
    name: 'donald trump',
    job: 'business man',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg',
    text: 'Owns multiple businesses and is one of the wealthiest people.'
  },
  {
    id: 2,
    name: 'cristiano R.',
    job: 'soccer player',
    img: 'https://www.usatoday.com/gcdn/authoring/images/apmediaapi/2023/11/19/USAT/71649215007-Portugal_Iceland_Euro_2024_Soccer_90586.jpeg',
    text: 'cristiano is one of the best soccer players in the world.'
  },
  {
    id: 3,
    name: 'karol G',
    job: 'artist',
    img: 'https://media.allure.com/photos/6227cb8ba822ef47bff03b2f/16:9/w_1983,h_1115,c_limit/Karol%20G%20Allure%20Beauty%20Interview1.jpg',
    text: 'she is a good colombian artist, one of the best.',
  },
  {
    id: 4,
    name: 'elon musk',
    job: 'CEO',
    img: 'https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg',
    text: 'Owns Tesla and SpaceX.',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const startBtn = document.querySelector('.startbutton');
const endBtn = document.querySelector('.endbutton');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

// Added Start Button
startBtn.addEventListener('click', function () {
  console.log('hello');
    currentItem = 0;
  showPerson(currentItem);
});

// Added End Button
endBtn.addEventListener('click', function () {
  console.log('hello');
    currentItem = 3;
  showPerson(currentItem);
});