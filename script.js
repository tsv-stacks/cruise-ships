class Ship {
  constructor(currentPort) {
    this.currentPort = currentPort;
  }
  setSail() {
    this.currentPort = "";
  }
}

class Port {
  constructor(name) {
    this.name = name;
  }
}

const titanic = new Ship();
console.log(titanic);

module.exports = { Ship, Port };
