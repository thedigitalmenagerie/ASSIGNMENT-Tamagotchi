import printToDom from './printToDom';
import pet from '../../assets/pet.png';

let fullness = 100;

const fullnessScore = () => {
  document.querySelector('#eatNum').innerHTML = `${fullness}`;
};

const healthyFood = (e) => {
  e.preventDefault();
  fullness += (Math.floor(Math.random() * 10) + 1);
  if (fullness > 100) {
    fullness = 100;
  }
  fullnessScore();
};

const junkFood = (e) => {
  e.preventDefault();
  fullness -= (Math.floor(Math.random() * 10) + 1);
  if (fullness <= 0) {
    fullness = 'XX';
  }
  fullnessScore();
};

const eatEgg = () => {
  const domString = `<div class="egg" id="egg">
    <div class="functionContainer" id="functionContainer">
      <nav class="navbar navbar-light bg-custom border border-dark">
        <a class="navbar-brand" href="">
          <img src="" style:"width: .1em" alt="">
        </a>
        <a class="navbar-brand" href="#">
          <img src="$" style:"width: .1em" alt="">
        </a>
        <a class="navbar-brand" href="#">
          <img src="" style:"width: .1em" alt="">
        </a>
        <a class="navbar-brand" href="#">
            <img src="" style:"width: .1em" alt="">
          </a>
          <a class="navbar-brand" href="fight.html">
            <img src="" style:"width: .1em" alt="">
          </a>
        </nav>
      <div class="screenContainer" id="screenContainer">
        <div class="nomNom" id="nomNom">NOM NOM</div>
        <div class="buttonInfo" id="buttonInfo">A = HEALTHY</div>
        <div class="buttonInfo" id="buttonInfo">B = JUNK</div>
        <div id="eat" class="quad">FULL LEVEL:</div>
        <div id="eatNum" class="eatNum">${fullness}</div>
      </div>
      <div class="footer" id="footer">
        <nav class="navbar navbar-light bg-custom border border-dark">
          <a class="navbar-brand" href="#">
            <img src="" style:"width: .1em" alt="">
          </a>
          <a class="navbar-brand" href="#">
            <img src="" style="width: .5em" alt="">
          </a>
          <a class="navbar-brand" href="#">
            <img src="" style="width: .5em" alt="">
          </a>
          <a class="navbar-brand" href="#">
            <img src="" style"width: .1em" alt="">
          </a>
          <a class="navbar-brand" href="#">
            <img src="" style="width: .5em" alt="">
          </a>
        </nav>
      </div>
      <div class="navButtonContainer" id="navButtonContainer">
        <button type="button" class="btn btn-light btn-circle btn-xl btn-a" id="eat-healthy-btn"><i>A</i></button>
        <button type="button" class="btn btn-light btn-circle btn-xl btn-b" id="eat-junk-btn"><i>B</i></button>
        </div>
      </div>
        <img src="${pet}" class="petImg" id="petImg" style="width: 5em">
    </div>`;

  printToDom('#eat', domString);
  document.querySelector('#eat-healthy-btn').addEventListener('click', healthyFood);
  document.querySelector('#eat-junk-btn').addEventListener('click', junkFood);
};

export default eatEgg;
