import React from 'react';

class Page extends React.Component {
  componentDidMount() {
    this.props.getPageNews(0);
    this.props.setPage(0);
  }
  render() {
    console.log(this.props);
    return (
      <div />
    );
  }
}

export default Page;
