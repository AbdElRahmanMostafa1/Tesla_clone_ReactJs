import "./App.css";
import Nav from "./components/Nav";
import TeslaModel from "./components/TeslaModel";
import allModelsData from "./data";

function App() {
  return (
    <main className="App">
      <Nav />
      {allModelsData.map(
        ({ background, modelName, order, link, btn1, btn2, icon }) => (
          <TeslaModel
            key={modelName}
            backgroundImage={background}
            modelName={modelName}
            order={order}
            link={link}
            btn1={btn1}
            btn2={btn2}
            icon={icon}
          />
        )
      )}
    </main>
  );
}

export default App;
