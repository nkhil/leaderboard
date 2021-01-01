import styled from 'styled-components';
import Link from 'next/link';
import theme from '../../constants/theme'

function Button({ className, text, link, isInternal, apiCall, newWindow, onClick }) {
  const target = newWindow ? '_blank' : '';

  switch (true) {
    case (isInternal && !apiCall):
      return (
        <div className={className}>
          <Link href={link} passHref={true}>
            <button>{text}</button>
          </Link>
        </div>
      )
    case (isInternal && apiCall):
      return (
        <div className={className}>
          <button onClick={onClick}>
            {text}
          </button>
        </div>
      )
    case !isInternal:
      return (
        <div className={className}>
          <a href={link} target={target}>
            <button>{text}</button>
          </a>
        </div>
      )
    default:
      break;
  }

  if (isInternal) {
    return (
      <div className={className}>
        <Link href={link} passHref={true}>
          <button>{text}</button>
        </Link>
      </div>
    )
  } else {
    return (
      <div className={className}>
        <a href={link} target={target}>
          <button>{text}</button>
        </a>
      </div>
    )
  }
}

export default styled(Button)`
  margin: 0 0 15px 0;
  
  button {
    padding: 10px 15px;
    text-transform: uppercase;
    background-color: ${theme.heroColour};
    border: 3px solid white;
    color: white;
    font-size: 1rem;

    &:hover {
      cursor: pointer;
      background-color: white;
      color: ${theme.heroColour};
      font-weight: 700;
    }
  }
`;