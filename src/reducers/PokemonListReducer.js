const DefaultState = {
  loading: false,
  data: [],
  errorMsg: ""
};

const PokemonListReducer = (state = DefaultState, action) => {
  switch (action.type){
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        loading:true,
      };
    case "POKEMON_LIST_FAIL":
      return {
        ...state,
        loading: false,

      };
    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    default:
      return state
  }
}

export default PokemonListReducer