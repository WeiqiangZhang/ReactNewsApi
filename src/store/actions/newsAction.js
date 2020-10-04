
import actionTypes from "../actionTypes";
import axios from "axios";

export const getPageNews = (page) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SET_NEWS_LOADING });
    axios({
      method: "GET",
      url: `http://localhost:${process.env.REACT_APP_SERVER_PORT}/news?page=${page}`,
    })
      .then((res) => {
        dispatch({ type: actionTypes.SET_NEWS, page: page, data: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const setPage = (page) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SET_NEWS_PAGE, page: page });
  };
};
