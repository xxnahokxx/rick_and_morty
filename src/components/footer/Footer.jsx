import React from "react";
import styled from "styled-components";

const FooterApp = styled.div`
    margin: 10px 0 0 0;
    width: 100%;
    background-color: rgb(0, 0, 0, .5);
`

const Content = styled.div`

    margin: 0 auto;
    width: 70%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    color: rgb(0, 178, 202);
    font-weight: bold;

    ul {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
    }
`;

export default function Footer(props) {

    const log = props.checkLogin;

    if (log) {
        return (
            <FooterApp>
                <Content>
                    <div>
                        <ul>
                            <li>Dato 1</li>
                            <li>Dato 2</li>
                            <li>Dato 3</li>
                            <li>Dato 4</li>
                        </ul>
                    </div>
                    <div>Inserte Redes</div>
                    <div>
                        <ul>
                            <li>Dato 1</li>
                            <li>Dato 2</li>
                            <li>Dato 3</li>
                            <li>Dato 4</li>
                        </ul>
                    </div>
                </Content>
            </FooterApp>
        );
    }
}
