import React from 'react';
import './App.css';
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import Pokemon from "./components/Pokemon";

//pokeapi.co

function App() {
  return (
    <div className="App">
    <nav>
      <NavLink to={"/pokemon/test"} > Search </NavLink>
    </nav>
      <Switch>
        <Route path={"/"} exact component= {PokemonList}/>
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon}/>
        <Redirect to={"/"}/>
      </Switch>
    </div>
  );
}

export default App;
