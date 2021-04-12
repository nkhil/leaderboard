import { Grid, Flex, Heading, Button, Stack } from "@chakra-ui/react";
import Card from '../Card';
import SignUp from '../../../assets/svg/sign_up.svg'
import Creds from '../../../assets/svg/creds.svg';
import Key from '../../../assets/svg/key.svg';


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
        my={8}
      >
        <Card 
          text={'Sign up for a developer account'} 
          Icon={SignUp}
        />
        <Card 
          text={'Create your client credentials'}
          Icon={Creds}
        />
        <Card
          text={'Get your token and start creating leaderboards'} 
          Icon={Key}
        />
      </Grid>
    </>
  )
}

export default FeatureCards;