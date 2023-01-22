import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import OutraPagina from "./pages/OutraPagina";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/outra-pagina"} component={OutraPagina} />
        <Route exactpath={"/"} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
