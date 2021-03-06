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
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return(
        <div className={"pokemon-wrapper"}>
          <div className={"item"}>
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt=""/>
            <img src={pokeData.sprites.back_default} alt=""/>
            <img src={pokeData.sprites.front_shiny} alt=""/>
            <img src={pokeData.sprites.back_shiny} alt=""/>
          </div>
          <div className="item">
            <h1>Stats</h1>
            {pokeData.stats.map(el => {
              return <p>{el.stat.name} {el.base_stat}</p>
            })}
          </div>
          <div className="item">
            <h1>Abilities</h1>
            {pokeData.abilities.map(el => {
              return <p>{el.ability.name}</p>
            })}
          </div>
        </div>
      )
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
