import React from 'react';
import './App.css';
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import PokemonList from "./containers/PokemonList";

function App() {
  return (
    <div className="App">
      <Swtich>
        <Route path={"/"} exact component= {PokemonList}/>
        <Route path={"/pokemon/:pokemon"} exact component={PokemonList}/>
        <Redirect to={"/"}/>
      </Switch>
    </div>
  );
}

export default App;
