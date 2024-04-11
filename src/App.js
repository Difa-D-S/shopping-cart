import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./component/Header";
import { AllRouter } from "./router/AllRouter";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <AllRouter />
      </div>
    </>
  );
}

export default App;
