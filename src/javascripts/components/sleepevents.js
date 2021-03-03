import printToDom from './printToDom';
import pet from '../../assets/pet.png';

let energy = 50;
let sleep = 0;

const energyScore = () => {
  document.querySelector('#energyNum').innerHTML = `${energy}`;
};

const sleepScore = () => {
  document.querySelector('#sleepNum').innerHTML = `${sleep}`;
};

const nap = (e) => {
  e.preventDefault();
  energy += (Math.floor(Math.random() * 10) + 1);
  if (energy > 100) {
    energy = 100;
  }
  energyScore();
};

const slumber = (e) => {
  e.preventDefault();
  sleep += (Math.floor(Math.random() * 10) + 1);

  sleepScore();
};

const sleepEgg = () => {
  let domString = '';
  domString += `<div class="egg" id="egg">
  <div class="screenContainer" id="screenContainer">
  <div class="displayContainer" id="displayContainer">
  <div class="header" id="header">
  <nav class="navbar navbar-light bg-custom border border-dark">
  <a class="navbar-brand" href="index.html">
    <img src="" style:"width: 5em" alt="">
  </a>
  <a class="navbar-brand" href="eat.html">
    <img src="" style:"width: 5em" alt="">
  </a>
  <a class="navbar-brand" href="#">
    <img src="" style:"width: 5em" alt="">
  </a>
  <a class="navbar-brand" href="#">
    <img src="" style:"width: 5em" alt="">
  </a>
  <a class="navbar-brand" href="fight.html">
    <img src="" style:"width: 5em" alt="">
  </a>
  <hr>
</nav>
</div>
    <div id="app">
      <div class="sleep" id="sleep">ZzZzZzZ</div>
      <div class="buttonInfo" id="buttonInfo">A = NAP</div>
      <div class="buttonInfo" id="buttonInfo">B = SLUMBER</div>
      <div id="sleep" class="quad">ENERGY:</div>
      <div id="energyNum" class="energyNum">${energy}</div>
      <div id="sleep" class="quad">SLEEP:</div>
      <div id="sleepNum" class="sleepNum">${sleep}</div>
    </div>
  </div>
  </div>
  <div class="footer" id="footer">
  <nav class="navbar navbar-light bg-custom border border-dark">
    <a class="navbar-brand" href="sleep.html">
      <img src="" style:"width: 5em" alt="">
    </a>
    <a class="navbar-brand" href="#">
      <img src="" style="width: 5em" alt="">
    </a>
    <a class="navbar-brand" href="#">
      <img src="" style="width: 5m" alt="">
    </a>
    <a class="navbar-brand" href="#">
      <img src="" style"width: 5em" alt="">
    </a>
    <a class="navbar-brand" href="play.html">
      <img src="" style="width: 5em" alt="">
    </a>
  </nav>
</div>
      <div class="navButtonContainer" id="navButtonContainer">
      <button type="button" class="btn btn-light btn-circle btn-xl btn-a" id="nap-btn"><i>A</i></button>
      <button type="button" class="btn btn-light btn-circle btn-xl btn-b" id="slumber-btn"><i>B</i></button>
      </div>
      <img src="${pet}" class="petImg" id="petImg" style="width: 5em">
      </div>`;

  printToDom('#sleep', domString);
  document.querySelector('#nap-btn').addEventListener('click', nap);
  document.querySelector('#slumber-btn').addEventListener('click', slumber);
};

export default sleepEgg;
