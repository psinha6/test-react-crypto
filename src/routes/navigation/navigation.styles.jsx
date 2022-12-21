import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    margin-bottom: 25px;
    background-color: #9c9a9a;
    align-items: center;
`

export const LogoContainer = styled(Link)`
    display: flex;
    padding: 25px;
    align-items: center;
    text-decoration: none;
    label {
        margin-left: 20px;
        height: 100%;
        cursor: pointer;
        color: #000;
        font-weight: bold;
    }
`
export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`
