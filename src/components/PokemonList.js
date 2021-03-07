import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonActions";
import { Link } from "react-router-dom";


const PokemonList = () => {
  const [search, setSearch] = useState("");
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

      return  (
        <div className={"list-wrapper"}>
          {pokemonList.data.map(el => {
            return (<div className={"pokemon-item"}>
              <p> {el.name} </p>
              <Link to={`/pokemon/${el.name}`}>
              Catch
              </Link>
            </div>
            )
          })}
        </div>
      )

      return <p> have data </p>

    }

    if( pokemonList.loading ){
      return <p> Loading...</p>
    }

    if(pokemonList.errorMsg !== ""){
      return <p>{pokemonList.errorMsg}</p>
    }

    return <p>unable to get data</p>

  };

  return(<div> <h1>Catch your Pokemon</h1> 
  

  {showData()}</div>
  )
};

export default PokemonList
