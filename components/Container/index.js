import styled from 'styled-components';
import theme from '../../constants/theme';

function Container({ className, children }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default styled(Container)`
  background-color: ${props => {
    if (props.bgColour) return props.bgColour;
    return 'white';
  }};
  max-width: ${theme.width};
  padding: 50px 20px;
  margin: auto;
`
