import Head from 'next/head';

import styled from 'styled-components';

function Hero({ className }) {
  return (
    <div className={className}>
      <h2>Simple API to record scores and manage a leaderboard</h2>
      <button type="button">Get started</button>
    </div>
  );
}

export default styled(Hero)`
  background-color: black;
`;
