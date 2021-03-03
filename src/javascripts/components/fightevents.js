import printToDom from './printToDom';
import pet from '../../assets/pet.png';

let strength = 100;

const strengthScore = () => {
  document.querySelector('#strengthNum').innerHTML = `${strength}`;
};

const runAwayBravely = (e) => {
  e.preventDefault();
  strength += (Math.floor(Math.random() * 10) + 1);
  if (strength > 100) {
    strength = 100;
  }
  strengthScore();
};

const beViolent = (e) => {
  e.preventDefault();
  strength -= (Math.floor(Math.random() * 10) + 1);
  if (strength <= 0) {
    strength = 100;
  }
  strengthScore();
};

const fightEgg = () => {
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
      <div class="fight" id="fight">FIGHT</div>
      <div class="buttonInfo" id="buttonInfo">A = RUN</div>
      <div class="buttonInfo" id="buttonInfo">B = VIOLENCE</div>
      <div id="strength" class="quad">STENGTH:</div>
      <div id="strengthNum" class="strengthNum">${strength}</div>
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
      <button type="button" class="btn btn-light btn-circle btn-xl btn-a" id="run-bravely-btn"><i>A</i></button>
      <button type="button" class="btn btn-light btn-circle btn-xl btn-b" id="violent-btn"><i>B</i></button>
      </div>
      <img src="${pet}" class="petImg" id="petImg" style="width: 5em">
      </div>`;

  printToDom('#fight', domString);
  document.querySelector('#run-bravely-btn').addEventListener('click', runAwayBravely);
  document.querySelector('#violent-btn').addEventListener('click', beViolent);
};

export default fightEgg;
