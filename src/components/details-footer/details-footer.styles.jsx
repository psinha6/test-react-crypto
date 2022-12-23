import styled from "styled-components";

export const Banner = styled.div`
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    background-color: #111111;
    padding: 10px;
    p {
        font-weight: bolder;
        font-size: 30px;
        color: #fff;
    }
`

export const WebSites = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    a {
        color: white;
        text-decoration: none;
    }
`