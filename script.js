class Ship {
  constructor(currentPort) {
    this.currentPort = currentPort;
  }
  setSail() {
    this.currentPort = "";
  }
  dock(port) {
    this.currentPort = port;
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
