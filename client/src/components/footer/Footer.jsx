import React from "react";
import styled from "styled-components";
import logo_henry from "../assets/img/logo_henry.png"

const FooterApp = styled.div`
    margin: 10px 0 0 0;
    width: 100%;
    background-color: rgb(0, 0, 0, .5);
`

const Content = styled.div`

    margin: 20px auto;
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
        display: flex;
        align-items: center;
    }
`;

const Log = styled.a`
    display: flex;
    text-decoration: none;
    font-size: 20px;
    color: rgb(72, 201, 118);
    align-items: center;
`;
const Logos = styled.img`
    width: 30px;
    height: 30px;
    `;

const LinkedIn = styled.svg`
    color: rgb(72, 201, 118);
    width: 20px;
    height: 20px;
`;


export default function Footer(props) {

    const log = props.checkLogin;

    if (log) {
        return (
            <FooterApp>
                <Content>
                    <div>
                        <ul>
                            <li>
                                <Log href="https://www.soyhenry.com/co" target="_blank">
                                <Logos src={logo_henry} alt="" />
                                </Log>
                                 Integration project
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Log href="https://www.linkedin.com/in/johan-amaya-675aa1265/" target="_blank">Linked
                            <LinkedIn xmlns="http:/www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </LinkedIn>
                        </Log>
                    </div>
                    <div>
                        <ul>
                            <li>Dato 4</li>
                        </ul>
                    </div>
                </Content>
            </FooterApp>
        );
    }
}
