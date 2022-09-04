export default class Team {
  constructor(...team) {
    this.team = [];
    for (const person of team) {
      this.team.push(person);
    }
  }

  * [Symbol.iterator]() {
    for (let index = 0; index < this.team.length; index += 1) {
      yield this.team[index];
    }
  }
}
