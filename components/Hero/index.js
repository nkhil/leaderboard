import WideContainer from '@components/WideContainer';
import Button from '@components/Button';
import theme from '../../constants/theme';
import Image from 'next/image';
import Container from '@components/Container';
import { useAuth } from '../../utils/authProvider';

import styled from 'styled-components';

function Hero({ className }) {
  const auth = useAuth();
  return (
    <WideContainer bgColour={theme.heroColour}>
      <Container bgColour={theme.heroColour}>
        <Image
          src="/images/logo.png"
          alt="leaderboard"
          width={250}
          height={50}
        />
        <h2>Simple API to record scores and manage a leaderboard</h2>
        <Button
          text={'Get Started'}
          link={'/dashboard'}
          isInternal={true}
          newWindow={false}
        />
        <Button
          text={'Read the docs'}
          link={'/documentation'}
          isInternal={true}
          newWindow={false}
        />
        <button
          type="button"
          onClick={() => auth.signinWithProvider('google')}
        >
          Sign in with google
        </button>
        <button
          type="button"
          onClick={() => auth.signout()}
        >
          Logout
        </button>
      </Container>
    </WideContainer >
  );
}

export default styled(Hero)`
  max-width: 1000px;
  color: white;
  padding: 50px 20px;
  margin: auto;

  h2 {
    font-weight: 200;
    font-size: 2.5rem;
    padding: 30px;
    margin-bottom: 20px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    
    padding: 20px 10px;
    
    h2 {
      font-size: 2rem;
      padding: 5px;
      margin-bottom: 20px;
    }
  }
`;
