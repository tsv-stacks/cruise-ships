const { Ship, Itinerary } = require("../script");

describe("Ship", () => {
  const port = {
    addShip: jest.fn(),
    removeShip: jest.fn(),
    name: "Dover",
    dockedShips: [],
  };
  const itinerary = new Itinerary([port]);
  const ship = new Ship(itinerary);

  it("can be instantiated", () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    expect(ship.currentPort).toBe(itinerary.ports[0]);
  });

  it("gets added to port on instantiation", () => {
    expect(port.addShip).toHaveBeenCalledWith(ship);
    expect(port.addShip).toHaveBeenCalledTimes(1);
  });
});

describe("Ship setting sail", () => {
  let ship;
  let itinerary;
  let calais;
  let dover;

  beforeEach(() => {
    dover = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Dover",
      dockedShips: [],
    };
    calais = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Calais",
      ships: [],
    };
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
  });

  it("can set sail", () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy;
    expect(dover.removeShip).toHaveBeenCalledWith(ship);
    expect(dover.removeShip).toHaveBeenCalledTimes(1);
  });
  it("cannot set sail if further than its itinerary", () => {
    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of Itinerary reached");
  });
  it("it can dock at different port", () => {
    ship.setSail();
    ship.dock();

    expect(dover.removeShip).toHaveBeenCalledWith(ship);
    expect(dover.removeShip).toHaveBeenCalledTimes(1);
    expect(calais.addShip).toHaveBeenCalledWith(ship);
    expect(calais.addShip).toHaveBeenCalledTimes(1);
  });
});
