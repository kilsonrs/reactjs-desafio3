const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

export default function gituser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_GITUSER_REQUEST":
      return { ...state, loading: true };
    case "ADD_GITUSER_SUCCESS":
      return {
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      };
    case "ADD_GITUSER_FAILURE":
      return { ...state, loading: false, error: action.payload.error };
    case "REMOVE_GITUSER_SUCCESS":
      return {
        data: state.data.filter(obj => obj.id !== action.payload.id)
      };
    default:
      return state;
  }
}
