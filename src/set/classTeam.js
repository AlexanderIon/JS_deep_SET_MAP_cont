export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(anyCharacter) {
    if (this.members.has(anyCharacter)) {
      // throw new Error('is in the Team')
      throw new Error(`${anyCharacter.name} is in the Team`);
    } else {
      this.members.add(anyCharacter);
    }
  }

  addAll(...amountOfCharacters) {
    for (const item of amountOfCharacters) {
      if (!this.members.has(item)) {
        this.add(item);
      }
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
