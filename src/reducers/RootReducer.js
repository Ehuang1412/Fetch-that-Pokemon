import { combineReducers } from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";

//pass in reducers:
const RootReducer = combineReducers( {
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer
});

export default RootReducer;