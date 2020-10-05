import actionTypes from '../actionTypes';

const initialState = {
  news: {},
  page: 1,
  loading: null,
  loaded: false,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NEWS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SET_NEWS:
      return {
        ...state,
        news: { ...state.news, [action.page]: action.data },
        loading: false,
        loaded: true,
      };
    case actionTypes.SET_NEWS_PAGE:
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};

export default newsReducer;
