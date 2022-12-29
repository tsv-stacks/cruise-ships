const { Port } = require("../script");

describe("Port", () => {
  it("can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    const port = new Port("Dover");
    expect(port.name).toBe("Dover");
  });

  it("can add a ship", () => {
    const port = new Port("Dover");
    const ship = {};
    port.addShip(ship);

    expect(port.dockedShips).toContain(ship);
  });

  it("can remove a ship", () => {
    const port = new Port("Dover");
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(titanic);

    expect(port.dockedShips).toEqual([queenMary]);
  });
});
