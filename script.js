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

class Itinerary {
  constructor(ports) {
    this.ports = ports;
  }
}

// const titanic = new Ship();
// console.log(titanic);

module.exports = { Ship, Port, Itinerary };
