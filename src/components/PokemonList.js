import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonActions";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.PokemonList);
  useEffect( ()=>{
    fetchData(1);
  }, []);

  const fetchData = (page=1) => {
    dispatch(GetPokemonList(page))
  }

  const showData = () => {
    if( !_.isEmpty(pokemonList.data)) {
      return <p> have data </p>
    }

    if( pokemonList.loading ){
      return <p> Loading...</p>
    }

    if(pokemonList.errorMsg !== ""){
      return <p>{pokemonList.errorMsg}</p>
    }
    return <p>sdf</p>
  };

  return(<div> Pokemon List {showData()}</div>
  )
};

export default PokemonList
