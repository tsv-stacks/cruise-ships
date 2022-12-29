class Ship {
  constructor(startingPort) {
    this.startingPort = startingPort;
  }
  setSail() {
    this.startingPort = "";
  }
}

const titanic = new Ship();
console.log(titanic);

module.exports = { Ship };
