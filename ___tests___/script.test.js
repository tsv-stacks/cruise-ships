const { Ship, Port, Itinerary } = require("../script");

describe("Ship", () => {
  it("can be instantiated", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(itinerary.ports[0]);
  });

  it("gets added to port on instantiation", () => {
    const dover = new Port("Dover");
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);

    expect(dover.dockedShips).toContain(ship);
  });

  it("can set sail", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy;
    expect(ship.previousPort).toBe(itinerary.ports[0]);
    expect(dover.dockedShips).not.toContain(ship);
  });

  it("cannot set sail if further than its itinerary", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of Itinerary reached");
  });
});

describe("Dock", () => {
  it("it can dock at different port", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.dockedShips).toContain(ship);
  });
});
