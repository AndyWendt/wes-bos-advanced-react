import React from 'react';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        Page component!
        {this.props.children}
      </div>
    );
  }
}
