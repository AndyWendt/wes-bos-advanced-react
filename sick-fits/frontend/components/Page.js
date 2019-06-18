import React from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export default class Page extends React.Component {
  render() {
    return (
      <StyledPage>
        <Meta />
        <Header />
        <Inner>
          {this.props.children}
        </Inner>
      </StyledPage>
    );
  }
}
