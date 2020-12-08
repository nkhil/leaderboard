import WideContainer from '@components/WideContainer'

import styled from 'styled-components';

function Hero({ className }) {
  return (
    <WideContainer bgColour='#14B1ED'>
      <div className={className}>
        <h2>Leaderboard is a simple API to record scores and manage a leaderboard</h2>
        <button type="button">Get started</button>
      </div>
    </WideContainer>
  );
}

export default styled(Hero)`
  max-width: 1000px;
  color: white;
  padding: 50px;
  margin: auto;

  h2 {
    font-weight: 200;
    font-size: 2.5rem;
    padding: 30px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    
    padding: 20px 10px;
    
    h2 {
      font-size: 2rem;
      padding: 5px;
    }
  }
`;
