class Ship {
  constructor(startingPort) {
    this.startingPort = startingPort;
  }
}

const titanic = new Ship();
console.log(titanic);

module.exports = { Ship };
