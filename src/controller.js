const bgSeaImage = document.getElementById("viewport");
let count = 0;
const image0 = "url('../images/water0.png')";
const image1 = "url('../images/water1.png')";

class Controller {
  constructor(ship) {
    this.ship = ship;
    this.bgSea();
    this.bgSound();
    this.setSail = function () {
      console.log("event listener");
      this.setOffSound();
      const shipElement = document.getElementById("ship");
      ship.setSail();
      ship.dock();
      let portList = document.querySelectorAll(".port");
      let portArray = Array.from(portList);
      let nextPortIndex = 0;
      for (let i = 0; i < portArray.length; i++) {
        if (portArray[i].dataset.portName === ship.nextPort.name) {
          nextPortIndex = i;
        }
      }
      let nextPortElement = document.querySelector(
        `[data-port-index="${nextPortIndex}"]`
      );
    };
    document
      .getElementById("sailbutton")
      .addEventListener("click", () => this.setSail());
  }
  setOffSound() {
    const shipHorn = new Audio("./sounds/shiphorn.mp3");
    const shipEngine = new Audio("./sounds/shipengine.mp3");
    shipHorn.loop = false;
    shipHorn.volume = 0.5;
    shipHorn.play();
    setTimeout(() => {
      shipEngine.loop = false;
      shipEngine.volume = 0.7;
      shipEngine.play();
    }, 4000);
  }
  bgSound = function () {
    const bg = new Audio("./sounds/mixkit-close-sea-waves-loop-1195.mp3");
    bg.loop = true;
    bg.volume = 0.25;
    // bg.play();
  };
  bgSea = function () {
    if (count > 1000) {
      console.log("has ran for over 1000 counts (30 minutes!)");
      return;
    } else {
      console.log("bg image changing");
      setTimeout(() => {
        bgSeaImage.style.backgroundImage = image1;
        setTimeout(() => {
          bgSeaImage.style.backgroundImage = image0;
          this.bgSea();
        }, 1000);
      }, 1000);
      count++;
    }
  };
  renderPorts = function (ports) {
    const portsElement = document.querySelector("#ports");
    portsElement.style.width = "0";
    const portsDiv = document.getElementById("ports");
    let portsArray = Array.from(ports);
    portsArray.forEach((e, index) => {
      const div = document.createElement("div");
      div.classList.add("port");
      div.dataset.portName = e.name;
      div.dataset.portIndex = index;
      portsElement.style.width = `${
        parseInt(portsElement.style.width) + 256
      }px`;
      portsDiv.appendChild(div);
    });
  };
  renderShip = function () {
    const ship = this.ship;
    const shipElement = document.getElementById("ship");
    shipElement.style.height = "64px";
    let shipIndex = 0;
    for (let i = 0; i < ship.itinerary.ports.length; i++) {
      if (ship.currentPort === ship.itinerary.ports[i]) {
        shipIndex = i;
      }
    }
    let portElement = document.querySelector(
      `[data-port-index="${shipIndex}"]`
    );
    shipElement.style.top = `${portElement.offsetTop + 32}px`;
    shipElement.style.left = `${portElement.offsetLeft - 32}px`;
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { Controller };
} else {
  window.Controller = Controller;
}
