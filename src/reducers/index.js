import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS } from "../actions";

const initialState = {
  loading: false,
  news: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
