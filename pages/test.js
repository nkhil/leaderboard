import styled from 'styled-components';
import { Container } from '@chakra-ui/react';

function Test({ className }) {

  return (
    <Container maxW="xl" >
      This is some content.
    </Container>
  )
}

export default styled(Test)`

`;
