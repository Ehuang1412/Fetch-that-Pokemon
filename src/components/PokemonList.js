import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate"; //documentaiton on github


const PokemonList = (props) => {
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
    if( pokemonList.loading ){
      return <p> Loading...</p>
    }
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

    

    if(pokemonList.errorMsg !== ""){
      return <p>{pokemonList.errorMsg}</p>
    }

    return <p>unable to get data</p>

  };

  return(
    <div> 
      <h1>Catch your Pokemon</h1> 
      <div className={"search-wrapper"}>
            <p>Search: </p>
            <input type="text" onChange={e => setSearch(e.target.value)}/>
            {/*history is from the react-router dom library*/}
            <button onClick={() => props.history.push(`/pokemon/${search}`)}>Search</button>
          </div>

      {showData()}
{/* Round up so that the last page can display the extra ones even though it won't be full house/page*/}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => fetchData(data.selected + 1)}
          
          containerClassName={"pagination"}
          
        />
      )}
    </div>
  )
};

export default PokemonList
