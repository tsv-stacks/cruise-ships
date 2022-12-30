const { Ship, Port, Itinerary } = require("../script");

describe("Ship", () => {
  const port = new Port("Dover");
  const itinerary = new Itinerary([port]);
  const ship = new Ship(itinerary);

  it("can be instantiated", () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    expect(ship.currentPort).toBe(itinerary.ports[0]);
  });

  it("gets added to port on instantiation", () => {
    expect(port.dockedShips).toContain(ship);
  });
});

describe("Ship setting sail", () => {
  let ship;
  let itinerary;
  let calais;
  let dover;

  beforeEach(() => {
    dover = new Port("Dover");
    calais = new Port("Calais");
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
  });

  it("can set sail", () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy;
    expect(ship.previousPort).toBe(itinerary.ports[0]);
    expect(dover.dockedShips).not.toContain(ship);
  });
  it("cannot set sail if further than its itinerary", () => {
    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of Itinerary reached");
  });
  it("it can dock at different port", () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.dockedShips).toContain(ship);
  });
});
