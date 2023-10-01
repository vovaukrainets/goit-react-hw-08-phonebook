import { NavMenu } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return <NavMenu></NavMenu>;
};

export default Navigation;
