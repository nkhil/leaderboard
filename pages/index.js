import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
   margin: 0;
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
        <title>SSR styled-components with Next.js Starter</title>
      </Head>
      <Container>
        <GlobalStyle />
        <h1>Hello, world!</h1>
      </Container>
    </>
  );
}
