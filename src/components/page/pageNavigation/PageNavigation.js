import React from 'react';
import { Wrapper, NextButton, PrevButton } from './style';

class PageNavigation extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <Wrapper>
        <PrevButton
          disabled={news.page === 1}
          page={news.page}
          onClick={() => this.props.prevClick()}>
          {'< prev'}
        </PrevButton>
        <NextButton onClick={() => this.props.nextClick()}>
          {'next >'}
        </NextButton>
      </Wrapper>
    );
  }
}

export default PageNavigation;
