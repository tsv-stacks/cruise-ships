let modalContainer = document.getElementById("modal-add-port");
let inputText = document.getElementById("add-port-input");
const itinerary = { ports: [] };
let controller = {};
let ship = {};

const formControl = {
  addPortForm: () => {
    if (modalContainer.style.display === "block") {
      modalContainer.style.display = "none";
    } else {
      modalContainer.style.display = "block";
    }
  },
  closeForm: () => (modalContainer.style.display = "none"),
  testCheck: () => {
    let portArray = Array.from(document.querySelectorAll(".port"));
    let testText = inputText.value.trim();
    if (testText === "") {
      return alert("Invalid Name!");
    } else if (ship.remainingPort === undefined) {
      return formControl.addPort(testText);
    } else if (portArray.some((port) => port.dataset.portName === testText)) {
      return alert("Port Already Exists!");
    } else {
      return formControl.addPort(testText);
    }
  },
  addPort: (x) => {
    const newUserPort = new Port(x);
    itinerary.ports.push(newUserPort);
    if (itinerary.ports.length === 1) {
      ship = new Ship(itinerary);
      controller = new Controller(ship);
      controller.renderPorts(itinerary.ports);
      controller.renderShip();
    } else {
      ship.remainingPort.push(newUserPort);
      const portsElement = document.querySelector("#ports");
      portsElement.innerHTML = "";
      controller.renderPorts(itinerary.ports);
    }
  },
};

document
  .getElementById("addport")
  .addEventListener("click", formControl.addPortForm);
document
  .getElementById("cancelbtn")
  .addEventListener("click", formControl.closeForm);
document
  .getElementById("submitbtn")
  .addEventListener("click", formControl.testCheck);
