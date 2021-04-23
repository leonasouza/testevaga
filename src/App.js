import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu"
import Formulario from "./components/Formulario"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Menu}/>
          <Route path="/adicionarProdutos" component={Formulario} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
