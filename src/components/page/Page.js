import React from 'react';
import PageNavigation from './pageNavigation';
import {
  Spinner,
  Wrapper,
  NewsWrapper,
  OrdinalWrapper,
  OrdinalText,
  OrdinalLink,
  OrdinalInfo,
  OrdinalRightWrapper,
} from './style';

class Page extends React.Component {
  componentDidMount() {
    this.props.getPageNews(1);
  }
  handleDirection = (direction) => {
    const { newsReducer, setPage, getPageNews } = this.props;
    const newPage =
      direction === 'prev' ? newsReducer.page - 1 : newsReducer.page + 1;
    setPage(newPage);
    if (!newsReducer.news[newPage]) getPageNews(newPage);
  };
  render() {
    const { newsReducer } = this.props;
    return (
      <React.Fragment>
        <PageNavigation
          news={this.props.newsReducer}
          prevClick={() => this.handleDirection('prev')}
          nextClick={() => this.handleDirection('next')}
        />
        {!newsReducer.loaded ||
        newsReducer.loading ||
        !newsReducer.news[newsReducer.page] ? (
          <Wrapper>
            <Spinner />
          </Wrapper>
        ) : (
          <NewsWrapper>
            {newsReducer.news[newsReducer.page].map((data, index) => (
              <OrdinalWrapper key={index}>
                <OrdinalText>
                  {(newsReducer.page - 1) * 30 + index + 1}
                </OrdinalText>
                <OrdinalRightWrapper>
                  <OrdinalLink
                    as="a"
                    onClick={() =>
                      data.type === 'link'
                        ? window.open(data.url, '_blank')
                        : {}
                    }
                    isLink={data.type === 'link'}>
                    {data.title}
                  </OrdinalLink>
                  <OrdinalInfo>{`${data.points} point${
                    data.points !== 1 ? 's' : ''
                  } by ${data.user} ${data.time_ago} | ${
                    data.comments_count
                  } comment${data.comments_count !== 1 ? 's' : ''}`}</OrdinalInfo>
                </OrdinalRightWrapper>
              </OrdinalWrapper>
            ))}
          </NewsWrapper>
        )}
      </React.Fragment>
    );
  }
}

export default Page;
