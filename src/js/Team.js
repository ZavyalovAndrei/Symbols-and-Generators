export class Team {
  constructor() {
    this.currentTeam = new Set();
  }
  makeTeam(...characters) {
    characters.forEach((item) => this.currentTeam.add(item));
  }

  *[Symbol.iterator]() {
    for (const char of this.currentTeam) {
      yield char;
    }
  }
}
