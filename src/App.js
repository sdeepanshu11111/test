// import components
import Aside from "./components/aside";
import Center from "./components/center";
import Right from "./components/right";

function App() {
  return (
    <div className="App">
      <Aside />
      <div id="burger" class="burger">
        <div class="line1"></div>
        <div class="line1"></div>
        <div class="line1"></div>
      </div>

      <div className="r">
        <Center />
        <Right />
      </div>
    </div>
  );
}

export default App;
