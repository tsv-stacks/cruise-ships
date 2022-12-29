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
  beforeAll(() => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
  });

  test("can set sail", () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy;
    expect(ship.previousPort).toBe(itinerary.ports[0]);
    expect(dover.dockedShips).not.toContain(ship);
  });

  test("cannot set sail if further than its itinerary", () => {
    // const dover = new Port("Dover");
    // const calais = new Port("Calais");
    // const itinerary = new Itinerary([dover, calais]);
    // const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of Itinerary reached");
  });
  test("it can dock at different port", () => {
    // const dover = new Port("Dover");
    // const calais = new Port("Calais");
    // const itinerary = new Itinerary([dover, calais]);
    // const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.dockedShips).toContain(ship);
  });
});
