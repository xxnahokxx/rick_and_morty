import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "./validation";
import logo from "../assets/img/logo.png";
import { Formulario, Label, Input, Boton, Session } from "../assets/styledComponent/styledComponents"



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
        <Session className="">
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

                    <Boton type="submit">Login</Boton>
                </Formulario>
            </div>
        </Session>
    );
}
