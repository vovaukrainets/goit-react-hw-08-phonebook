import { AuthNavMenu } from './AuthNav.styled';
import { StyledLink } from 'components/Commons/Commons.styled';

const AuthNav = () => {
  return (
    <AuthNavMenu>
      <StyledLink to="/register">Sign Up</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </AuthNavMenu>
  );
};

export default AuthNav;
