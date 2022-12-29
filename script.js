class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.remainingPort = [...itinerary.ports];
  }
  setSail() {
    if (this.remainingPort.length < 2) {
      throw new Error("End of Itinerary reached");
    } else {
      this.previousPort = this.currentPort;
      this.currentPort = null;
      this.remainingPort.shift();
    }
  }
  dock(port) {
    // const itinerary = this.itinerary;
    // const ppIndex = itinerary.ports.indexOf(this.previousPort);
    // this.currentPort = itinerary.ports[ppIndex + 1];
    this.currentPort = this.remainingPort[0];
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
