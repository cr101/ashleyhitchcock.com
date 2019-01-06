import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle, keyframes } from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import { MaxWidthLayout } from './styles/Layout';
import { Normalize } from 'styled-normalize';
import PageHead from './Head';

const theme = {
  darkMode: false,
  primary: 'var(--primary-color, #000)',
  secondary: 'var(--secondary-color, #fff)',
  blue: '#1c46f2',
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  white: '#ffffff',
  maxWidth: '1190px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  fadeBlue: 'linear-gradient(to left, #1c46f2, #5f5fe8)',
  fade: 'linear-gradient(to left, #000, #000)',
  bgAni: 'backgroundAni 5s ease infinite',
  font:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  headingFont: '"Cardo", serif',
  backgroundAni: `
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`
};

const backgroundAni = keyframes`${theme.backgroundAni}`;

const StyledPage = styled.main`
  position: relative;
  background: ${theme.secondary};
  color: ${theme.primary};
  min-height: 100vh;
  padding: 1rem 1rem 20px 1rem;
  margin: 0 1rem;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Cardo');

  :root {
  --primary-color: #000;
  --secondary-color: #fff;

  @media (prefers-color-scheme: dark) {
    --primary-color: #fff;
  --secondary-color: #000;
  }
}


  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 1.25;
    background-color: ${theme.primary};
    color: ${theme.primary};
    background-size: 400% 400%;
    animation: ${backgroundAni} 5s ease infinite;
    font-family: ${theme.font};
    width: 100%;
    transition: background 0.2s ease-in;

    &:before,
    &:after {
        transition: background 0.2s ease-in;
        background: inherit;
        animation: inherit;
        content: "";
        display: block;
        height: 1rem;
        left: 0;
        position: fixed;
        width: 100%;
        z-index: 80;
    }

  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }

  &.menu-open {
    position: fixed;
  }
   
  }
  a {
    text-decoration: none;
    color: ${theme.primary};
  }
  button {  }

  h1,
  h2,
  h3 {
      color: ${theme.primary};
      font-family: ${theme.headingFont};
      font-weight: 400;
  }

  h1 {
    font-size: 1.75rem;
  }

  h2, h3 {
    font-size: 1.5rem;
  }

`;

export default class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Normalize />
          <GlobalStyle />
          <StyledPage>
            <PageHead />
            <Header />
            <MaxWidthLayout>{this.props.children}</MaxWidthLayout>
            <Footer />
          </StyledPage>
        </>
      </ThemeProvider>
    );
  }
}
