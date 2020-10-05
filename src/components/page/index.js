import Page from './Page';
import { connect } from 'react-redux';
import * as newsAction from 'store/actions/newsAction';

const mapDispatchToProps = (dispatch) => {
  return {
    getPageNews: (page) => dispatch(newsAction.getPageNews(page)),
    setPage: (page) => dispatch(newsAction.setPage(page)),
  };
};

const mapStateToProps = (state) => {
  return {
    newsReducer: state.newsReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
