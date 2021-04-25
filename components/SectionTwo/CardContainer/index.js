import { Grid, Flex, Heading, Button, Stack } from "@chakra-ui/react";
import Card from './Card';
import featureFixture from '../../../constants/features';

function CardContainer() {
  return (
    <>
      <Grid
        width={{
          sm: "30em",
          md: "48em",
          lg: "62em",
          base: "20em",
        }}
        justifyContent={['flex-start', 'space-around', ]}
        templateColumns="repeat(auto-fill, 250px)"
        templateRows='auto' gap={'10px'}
        my={12}
      >
        {featureFixture.map(feature => (
          <Card 
            heading={feature.title}
            description={feature.description}
          />
        ))}
      </Grid>
    </>
  )
};

export default CardContainer;
