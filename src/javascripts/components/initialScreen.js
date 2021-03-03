import printToDom from './printToDom';

const initialScreen = () => {
  let domString = '';
  domString += `
    <div id="quad-container">
    <div id="left-row">
      <div id="eat" class="quad"></div>
      <div id="fight" class="quad"></div>
    </div>
    <div id="right-row">
      <div id="play" class="quad"></div>
      <div id="sleep" class="quad"></div>
    </div>
  </div>`;

  printToDom('#app', domString);
};

export default initialScreen;
