import { Flex, Heading, Button, Stack } from "@chakra-ui/react";
import FeatureCards from './FeatureCards';
import FadeIn from 'react-fade-in';

function SectionOne() {
  return (
    <>
      <Flex justifyContent="center">
        <Flex
          my={12}
          p={4}
          pb={12}
          width={{
            sm: "25em",
            md: "48em",
            lg: "62em",
            base: "30em",
          }}
          alignItems='center'
          flexDirection='column'
        >
          <FadeIn delay={500}>
            <Heading
              as='h2'
              fontSize={{
                base: '3xl',
                md: '4xl',
                lg: '4xl',
              }}
              fontWeight='700'
              color='black'
              textAlign='center'
              lineHeight={'1.3'}
              px={0}
              my={0}
              mt={4}
              width={{
                md: '18em',
                lg: '18em',
                sm: '10em',
                base: '12em'
              }}
            >
              Start shipping your leaderboard features in 3 easy steps
            </Heading>
          </FadeIn>
          <FadeIn delay={700}>
            <FeatureCards />
          </ FadeIn>
        </Flex>
      </Flex>
    </>
  );
}

export default SectionOne;
