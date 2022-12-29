const { Ship, Port, Itinerary } = require("../script");

describe("Ship", () => {
  const dover = new Port("Dover");
  const calais = new Port("Calais");
  const itinerary = new Itinerary([dover, calais]);
  const ship = new Ship(itinerary);

  it("remaining port is same as itineray at start", () => {
    expect(ship.remainingPort).toEqual(ship.itinerary.ports);
  });

  it("itinery stays constant and not affected by remaining port function", () => {
    ship.setSail();
    expect(ship.itinerary.ports.length).toBe(2);
    expect(ship.remainingPort.length).toBe(1);
  });
});
