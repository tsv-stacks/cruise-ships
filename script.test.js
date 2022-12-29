const { Ship } = require("./script");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    const ship = new Ship("Dover");
    expect(ship.startingPort).toBe("Dover");
  });

  it("can set sail", () => {
    const ship = new Ship("Dover");
    ship.setSail();
    expect(ship.startingPort).toBeFalsy;
  });
});
