import Logo from '../../assets/svg/logo.svg';
import { Link } from "@chakra-ui/react";

const Named = () => {
  return (
    <>
      <Link
      href={'/'}
      style={{ textDecoration: 'none' }}
      >
        <Logo />
      </Link>
    </>
  )
}

export default Named;
