import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'


const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logoLink" to= '/'>
          <CrownLogo className="logo" />
        </Link>
        <div className="navLinksContainer">
          <Link className="navLink" to="/shop">
            SHOP
          </Link>
          <Link className="navLink" to="/signIn">
            SIGNIN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
