import actionTypes from '../actionTypes';
import axios from 'axios';

export const getPageNews = (page) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SET_NEWS_LOADING });
    axios({
      method: 'GET',
      url: `http://localhost:${process.env.REACT_APP_SERVER_PORT}/news?page=${page}`,
    })
      .then((res) => {
        res.data.sort((a, b) =>
          a.time === b.time
            ? b.comments_count - a.comments_count
            : b.time - a.time
        );
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
