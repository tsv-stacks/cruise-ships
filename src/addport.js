let modal = document.getElementById("modal-add-port");
let inputText = document.getElementById("add-port-input");
const itinerary = { ports: [] };
let controller = {};
let ship = {};

const formControl = {
  addPortForm: () => {
    if (modal.style.display === "block") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  },
  closeForm: () => (modal.style.display = "none"),
  testCheck: () => {
    console.log("submit btn");
    let portList = document.querySelectorAll(".port");
    let portArray = Array.from(portList);
    let testText = inputText.value.trim();
    if (testText === "") {
      return alert("Invalid Name!");
    } else if (ship.remainingPort === undefined) {
      console.log("array does not exist");
      return formControl.addPort(testText);
    } else if (portArray.some((port) => port.dataset.portName === testText)) {
      return alert("Port Already Exists!");
    } else {
      console.log("added");
      return formControl.addPort(testText);
    }
  },
  addPort: (x) => {
    console.log(x);
    const newUserPort = new Port(x);
    console.log(newUserPort);
    itinerary.ports.push(newUserPort);
    console.log(itinerary.ports);
    if (itinerary.ports.length === 1) {
      ship = new Ship(itinerary);
      controller = new Controller(ship);
      controller.renderPorts(itinerary.ports);
      controller.renderShip();
    } else {
      console.log("second run");
      console.log(ship.remainingPort.length);
      ship.remainingPort.push(newUserPort);
      const portsElement = document.querySelector("#ports");
      portsElement.innerHTML = "";
      console.log(itinerary.ports);
      //   ship = new Ship(itinerary);
      //   controller = new Controller(ship);
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
