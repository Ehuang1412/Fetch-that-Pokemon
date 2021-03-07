import React ,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/pokemonActions";
import _ from "lodash";

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector(state => state.Pokemon);

// put into API to get relevant data
  useEffect(()=>{
    dispatch(GetPokemon(pokemonName))
  },[])

  console.log(pokemonState)

  const showData = () => {
    if(!_.isEmpty(pokemonState.data[pokemonName])) {
      return <p> have data</p>
    }


    if( pokemonState.loading){
      return <p>Loading...</p>
    }

    if( pokemonState.errorMsg !== ""){
      return <p> {pokemonState.errorMsg}</p>
    }
    return <p> error getting pokemon</p>
  }
  
  return(<div> <h1> {pokemonName}{showData()}</h1> </div>
  )
};

export default Pokemon
