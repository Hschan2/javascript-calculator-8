import User from './User';
import Valid from './Valid';
import Game from './Game';

class App {
  async run() {
    await this.user();
  }

  async user() {
    const userInput = new User();
    await userInput.initializeUserInput();

    const separatedInput = userInput.getSeparatedInput();
    await this.valid(separatedInput);
  }

  async valid(refinedInput) {
    const validation = new Valid(refinedInput);
    await validation.isValid();

    const validInput = validation.getValidInput();
    await this.game(validInput);
  }

  async game(refinedInput) {
    const setGame = new Game(refinedInput);
    await setGame.isSum();

    await setGame.resultPrint();
  }
}

export default App;
