import { Flex, Heading, Button, Stack } from "@chakra-ui/react";
import FeatureCards from './FeatureCards';
import FadeIn from 'react-fade-in';

function SectionOne() {
  return (
    <>
      <Flex justifyContent="center">
        <Flex
          p={4}
          pb={12}
          width={{
            sm: "30em",
            md: "48em",
            lg: "62em",
            base: "30em",
          }}
          // maxWidth='1000px'
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
              px={2}
              my={0}
              mt={4}
            >
              Get started shipping your leaderboard or scoreboard features
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
