import styled from 'styled-components';

function Button({ className, text }) {
  return (
    <button type="button" className={className}>
      {text}
    </button>
  )
}

export default styled(Button)`

`;