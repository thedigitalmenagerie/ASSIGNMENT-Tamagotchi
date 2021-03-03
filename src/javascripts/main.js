import '../styles/main.scss';
import initialScreen from './components/initialScreen';
import eatEgg from './components/eatevents';
import funEgg from './components/playevents';
import fightEgg from './components/fightevents';
import sleepEgg from './components/sleepevents';

const init = () => {
  initialScreen();
  eatEgg();
  funEgg();
  fightEgg();
  sleepEgg();
};

init();
