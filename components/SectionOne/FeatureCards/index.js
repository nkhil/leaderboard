import { Grid, Flex, Heading, Button, Stack } from "@chakra-ui/react";
import Card from '../Card';
import SignUp from '../../../assets/svg/user.svg'
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
        my={12}
      >
        <Card 
          text={'Sign up'} 
          Icon={SignUp}
        />
        <Card 
          text={'Create credentials'}
          Icon={Creds}
        />
        <Card
          text={'Start building features'} 
          Icon={Key}
        />
      </Grid>
    </>
  )
}

export default FeatureCards;