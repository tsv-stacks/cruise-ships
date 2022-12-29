class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.remainingPort = [...itinerary.ports];
  }
  setSail() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
    this.remainingPort.shift();
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
