import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as crwnlogo } from "../../assets/logo.svg";
// import logo from '../../assets/logo.svg';
// import './navigation.styles.scss';
import crwnlogo2 from '../../assets/crown.svg';

const Nav = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    {/* <crwnlogo2  className="logo" /> */}
                    <img className="logo" src={crwnlogo2} alt="crwnlogo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>Shop</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
     );
  }

export default Nav;