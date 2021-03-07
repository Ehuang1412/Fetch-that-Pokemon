import { combineReducers } from "redux";
import PokemonListReducer from "./PokemonListReducer";

//pass in reducers:
const RootReducer = combineReducers( {
  PokemonList: PokemonListReducer
});

export default RootReducer;