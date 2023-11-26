import { Outlet,  } from "react-router-dom";
import { Fragment,  } from "react";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import CartIcon from "../../cart-icon/cart-icon.component";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import "./navigation.styles.jsx";
import { signUserOut } from "../../../utils/firebase/firebase.utils";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import {  useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector.js";
import {
  selectIsCartOpen,
} from "../../../store/cart/cart.selector.js";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);
  // const { opened, setOpened } = useContext(DropdownContext);
  const opened = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signUserOut}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {opened && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
