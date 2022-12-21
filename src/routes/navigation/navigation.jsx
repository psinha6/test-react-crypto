import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown-crw-logo.svg";
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles.jsx";
const Navigation = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink className="nav-link" to="/shop">
                        Shop
                    </NavLink>
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
};

export default Navigation;