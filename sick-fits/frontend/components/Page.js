import React from 'react';
import Header from './Header';
import Meta from './Meta';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}
