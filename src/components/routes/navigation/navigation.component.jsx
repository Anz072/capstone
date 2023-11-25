import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import CartIcon from "../../cart-icon/cart-icon.component";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import "./navigation.styles.jsx";
import { UserContext } from "../../../context/user.context";
import { signUserOut } from "../../../utils/firebase/firebase.utils";
import { DropdownContext } from "../../../context/dropdown.context";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { opened, setOpened } = useContext(DropdownContext);
  const cartIconHandler = () => {
    setOpened(!opened);
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signUserOut}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">
              Sign In
            </NavLink>
          )}
          <div onClick={cartIconHandler}>
            <CartIcon />
          </div>
        </NavLinks>
        {opened && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
