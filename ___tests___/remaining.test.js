const { Ship, Port, Itinerary } = require("../script");

describe("Ship", () => {
  it("remaining port is same as itineray at start", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship.remainingPort).toEqual(ship.itinerary.ports);
  });

  it("itinery stays constant and not affected by remaining port function", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.itinerary.ports.length).toBe(2);
  });

  it("after setting sail remaining port value decrease by 1", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.remainingPort.length).toBe(1);
  });
});
