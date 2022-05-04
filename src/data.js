import model3 from "./assets/images/desktop/M3-desktop.jpg";
import modely from "./assets/images/desktop/My-desktop.jpg";
import models from "./assets/images/desktop/ms-desktop.jpg";
import modelx from "./assets/images/desktop/mx-desktop.jpg";
import solarPanels from "./assets/images/desktop/solar-panels-desktop.jpg";
import solarRoof from "./assets/images/desktop/solar-roof.jpg";
import accessories from "./assets/images/desktop/accessories-desktop.jpg";

/* Mobile Backgrounds */
import model3Mobile from "./assets/images/mobile/m3-mobile.jpg";
import modelyMobile from "./assets/images/mobile/my-mobile.jpg";
import modelsMobile from "./assets/images/mobile/ms-mobile.jpg";
import modelxMobile from "./assets/images/mobile/mx-mobile.jpg";
import solarPanelsMobile from "./assets/images/mobile/solar-roof-mobile.jpg";
import solarRoofMobile from "./assets/images/mobile/solar-roof-mobile.jpg";
import accessoriesMobile from "./assets/images/mobile/accessories-mobile.jpg";

let allModelsData = [
  {
    background: model3,
    modelName: "model 3",
    order: "Order Online for",
    link: "Touchless Delivery",
    btn1: "custom order",
    btn2: "existing inventory",
    icon: "fa-solid fa-angle-down",
  },
  {
    background: modely,
    modelName: "model y",
    order: "Order Online for",
    link: "Touchless Delivery",
    btn1: "custom order",
    btn2: "existing inventory",
  },
  {
    background: models,
    modelName: "model s",
    order: "Order Online for",
    link: "Touchless Delivery",
    btn1: "custom order",
    btn2: "existing inventory",
  },
  {
    background: modelx,
    modelName: "model x",
    order: "Order Online for",
    link: "Touchless Delivery",
    btn1: "custom order",
    btn2: "existing inventory",
  },
  {
    background: solarPanels,
    modelName: "solar panels",
    order: "Lowest Cost Solar Panels in America",
    link: "",
    btn1: "order now",
    btn2: "learn more",
  },
  {
    background: solarRoof,
    modelName: "solar roof",
    order: "produce clean energy from your roof",
    link: "",
    btn1: "order now",
    btn2: "learn more",
  },
  {
    background: accessories,
    modelName: "accessories",
    order: "",
    link: "",
    btn1: "shop now",
  },
];

const allModelsForMobile = [
  model3Mobile,
  modelyMobile,
  modelsMobile,
  modelxMobile,
  solarPanelsMobile,
  solarRoofMobile,
  accessoriesMobile,
];

if (window.innerWidth < 560) {
  for (let i = 0; i < allModelsData.length; i++) {
    allModelsData[i].background = allModelsForMobile[i];
  }
}

export default allModelsData;
