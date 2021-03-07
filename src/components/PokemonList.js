import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.PokemonList);
  return(<div> Pokemon List </div>
  )
};

export default PokemonList
