import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown-crw-logo.svg";
import { LogoContainer, NavigationContainer } from "./navigation.styles.jsx";
const Navigation = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo className="logo" />
                    <label>Crypto React App</label>
                </LogoContainer>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
};

export default Navigation;