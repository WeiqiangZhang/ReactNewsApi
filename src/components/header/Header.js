import React from 'react';
import { Wrapper, Text, CustomLogo, HeaderLeft, HeaderRight } from './style';

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <HeaderLeft>
          <CustomLogo />
          <Text>News</Text>
        </HeaderLeft>
        <HeaderRight>
          <Text>About</Text>
        </HeaderRight>
      </Wrapper>
    );
  }
}

export default Header;
