import styled from 'styled-components';

function WideContainer({ className, children }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default styled(WideContainer)`
  background-color: ${props => {
    if (props.bgColour) return props.bgColour;
    return 'white';
  }};
`
