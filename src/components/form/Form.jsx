import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "./validation";
import styled from "styled-components";
import logo from "../assets/img/logo.png";

const Formulario = styled.form`
    margin: auto;
    padding-top: 50px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("https://cdn.dribbble.com/userupload/2839151/file/original-b1b7fd13edb07bfdb434463c7339aef0.png?compress=1&resize=752x");
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 30% 80% 20% 60% / 40% 80%;
    border: 1px solid transparent;
    width: 600px;
    height: 400px;

    div {
        width: 350px;
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        /* flex-direction: column; */
        padding: 5px;
        p {
            margin: 0;
            width: 350px;
            color: #48c976;
            font-size: large;
            font-weight: bold;
            text-align: right;
            text-shadow: 0 0 3px rgb(0, 0, 0) ;
            /* -webkit-text-stroke: 1px #141414; */
        }
    }
    img {
        padding: 20px 0;
        width: 400px;
        height: 100px;
        background-image: url("../img/logo.png");
    }
    @media (max-width: 800px) {
        width: 100%;
    }
`;

const Label = styled.label`
    color: #48c976;
    font-size: large;

    font-weight: bold;
    padding: 10px 0;
    margin: 0 10px 0 0;
    -webkit-text-stroke: 1px #141414;
`;

const Boton = styled.button`
    margin-top: 5px;
    width: 100px;
    border-radius: 8px;
    border: 2px solid #49c877 ;
    font-size: 15px;
    padding: .25rem 1rem;
    background: #141414;
    color: #49c877;
    font-weight: bold;
    cursor: pointer;
    transition: all .5s;

    &:hover {
        background: #49c877;
        color: #141414;
        border: 2px solid #141414;
        outline: 1px solid #49c877;
    }
`;

const Input = styled.input`
    width: 200px;
    border-radius: 7px;
    padding: 5px 0;
    text-align: center;
    border: 2px solid #48c976;
    background-color: #141414;
    outline: 2px solid #141414;
    color: #48c976;
    font-weight: bold;
`;

export default function Form(props) {

    const [userData, setUserData] = useState({
        userName: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        userName: "",
        password: "",
    });

    const handleChanges = (event) => {
        const { value, name } = event.target
        setUserData({ ...userData, [name]: value });
        setErrors(validation({ ...userData, [name]: value }));
    }
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const arErrors = Object.values(errors).length;
        if (arErrors === 0) {
            props.handleSubmit(userData)
        } else {
            navigate("/")
        }
    }


    return (
        <div style={{ padding: "100px 0" }}>

            <Formulario action="" onSubmit={handleSubmit}>

                <img src={logo} alt="logo" />

                <div>
                    <Label htmlFor="">EMAIL</Label>
                    <Input key="email" name="userName" value={userData.userName} placeholder="Email..." type="email" onChange={handleChanges} />
                    {errors.userName ? <p>{errors.userName}</p> : null}
                </div>

                <div>
                    <Label htmlFor="">PASSWORD</Label>
                    <Input key="password" name="password" value={userData.password} type="password" onChange={handleChanges} />
                    {errors.password ? <p>{errors.password}</p> : null}
                </div>

                <Boton type="submit">Submit</Boton>
            </Formulario>
        </div>
    );
}
