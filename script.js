export class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.remainingPort = [...itinerary.ports];
    this.currentPort.addShip(this);
  }
  setSail() {
    if (this.remainingPort.length < 2) {
      throw new Error("End of Itinerary reached");
    } else {
      this.currentPort.removeShip(this);
      this.previousPort = this.currentPort;
      this.currentPort = null;
      this.remainingPort.shift();
    }
  }
  dock(port) {
    this.currentPort = this.remainingPort[0];
    this.currentPort.addShip(this);
  }
}

export class Port {
  constructor(name) {
    this.name = name;
    this.dockedShips = [];
  }
  addShip(ship) {
    this.dockedShips.push(ship);
  }
  removeShip(ship) {
    this.dockedShips = this.dockedShips.filter((e) => e !== ship);
  }
}

export class Itinerary {
  constructor(ports) {
    this.ports = ports;
  }
}

// if (typeof module !== "undefined" && module.exports) {
//   module.exports = { Ship, Port, Itinerary };
// } else {
//   window.Port = Port;
//   window.Ship = Ship;
//   window.Itinerary = Itinerary;
// }

// module.exports = { Ship, Port, Itinerary };
