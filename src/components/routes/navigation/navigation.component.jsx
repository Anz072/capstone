import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import CartIcon from "../../cart-icon/cart-icon.component";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../../context/user.context";
import { signUserOut } from "../../../utils/firebase/firebase.utils";
import { DropdownContext } from "../../../context/dropdown.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { opened, setOpened } = useContext(DropdownContext);
  const cartIconHandler = () => {
    setOpened(!opened);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signUserOut}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <div onClick={cartIconHandler}>
            <CartIcon />
          </div>
        </div>
        {opened && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
