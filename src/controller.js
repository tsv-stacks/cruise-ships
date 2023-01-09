let bgSeaImage = document.getElementById("viewport");
let count = 0;
let image0 = "url('../images/water0.png')";
let image1 = "url('../images/water1.png')";

class Controller {
  constructor() {
    this.bgSea();
  }
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
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { Controller };
} else {
  window.Controller = Controller;
}
