import { Grid, Flex, Heading, Button, Stack } from "@chakra-ui/react";
import Card from '../Card';
import SignUp from '../../../assets/svg/user.svg'
import Creds from '../../../assets/svg/creds.svg';
import Build from '../../../assets/svg/build.svg';


function FeatureCards() {

  return (
    <>
      <Grid
        width={{
          sm: "30em",
          md: "48em",
          lg: "62em",
          base: "20em",
        }}
        justifyContent='space-around'
        templateColumns="repeat(auto-fill, 250px)"
        templateRows='auto' gap={'10px'}
        my={12}
      >
        <Card 
          text={'1. Sign up'}
          description={'Sign up using Github, Google or with a username & password'}
          Icon={SignUp}
        />
        <Card 
          text={'2. Create credentials'}
          description={'Create credentials that will be used to get a secure token'}
          Icon={Creds}
        />
        <Card
          text={'3. Start building!'}
          description={'Start building leaderboard and scoreboard features for your game or app'}
          Icon={Build}
        />
      </Grid>
    </>
  )
}

export default FeatureCards;