let bgSeaImage = document.getElementById("viewport");
let count = 0;
let image0 = "url('../images/water0.png')";
let image1 = "url('../images/water1.png')";

// class Controller {
//   constructor() {}
//   initialiseSea() {}
// }

const bgSea = () => {
  if (count > 1000) {
    console.log("has ran for over 1000 counts (30 minutes!)");
    return;
  } else {
    console.log("bg image changing");
    setTimeout(() => {
      bgSeaImage.style.backgroundImage = image1;
      setTimeout(() => {
        bgSeaImage.style.backgroundImage = image0;
        bgSea();
      }, 1000);
    }, 1000);
    count++;
  }
};

bgSea();
