import Head from 'next/head';
import Hero from '@components/Hero'

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;500;700&display=swap');

  html, * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`;
const Container = styled.div`
  text-align: center;
  background-color: #14b1ed;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Leaderboard API</title>
      </Head>
      <Container>
        <GlobalStyle />
        <Hero />
      </Container>
    </>
  );
}
