import User from './User';
import Valid from './Valid';
import Game from './Game';

class App {
  async run() {
    const separatedInput = await new User().promptAndParse();
    const validInput = new Valid().validate(separatedInput);
    new Game(validInput).resultPrint();
  }
}

export default App;
