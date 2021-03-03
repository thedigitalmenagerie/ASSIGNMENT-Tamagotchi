import printToDom from './printToDom';
import pet from '../../assets/pet.png';

let fun = 50;

const funScore = () => {
  document.querySelector('#funNum').innerHTML = `${fun}`;
};

const superFun = (e) => {
  e.preventDefault();
  fun += (Math.floor(Math.random() * 10) + 1);
  if (fun > 100) {
    fun = 100;
  }
  funScore();
};

const someFun = (e) => {
  e.preventDefault();
  fun += (Math.floor(Math.random() * 10) + 1);
  if (fun > 100) {
    fun = 100;
  }
  funScore();
};

const funEgg = () => {
  let domString = '';
  domString += `<div class="egg" id="egg">
  <div class="screenContainer" id="playScreenContainer">
  <div class="displayContainer" id="displayContainer">
  <div class="header" id="header">
  <nav class="navbar navbar-light bg-custom border border-dark" id="playNav">
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
      <div class="fun" id="fun">FUN</div>
      <div class="buttonInfo" id="buttonInfo">A = SUPER FUN</div>
      <div class="buttonInfo" id="buttonInfo">B = FUN</div>
      <div id="fun" class="quad">FUN LEVEL:</div>
      <div id="funNum" class="funNum">${fun}</div>
    </div>
  </div>
  </div>
  <div class="footer" id="footer">
<nav class="navbar navbar-light bg-custom border border-dark" id="playNav">
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
      <button type="button" class="btn btn-light btn-circle btn-xl btn-a" id="super-fun-btn"><i>A</i></button>
      <button type="button" class="btn btn-light btn-circle btn-xl btn-b" id="some-fun-btn"><i>B</i></button>
      </div>
      <img src="${pet}" class="petImg" id="petImg" style="width: 5em">
      </div>`;

  printToDom('#play', domString);
  document.querySelector('#super-fun-btn').addEventListener('click', superFun);
  document.querySelector('#some-fun-btn').addEventListener('click', someFun);
};

export default funEgg;
