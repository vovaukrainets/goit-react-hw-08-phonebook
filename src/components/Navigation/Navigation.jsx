import { useAuth } from 'hooks/useAuth';
import { NavMenu } from './Navigation.styled';
import { StyledLink } from 'components/Commons/Commons.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavMenu>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </NavMenu>
  );
};

export default Navigation;
