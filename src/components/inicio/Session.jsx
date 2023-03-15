import React, { useState } from "react";


export default function Session() {
    const [character, setCharacter] = useState({
        name: "",
        password: "",
    });
    const handleChange = (event) => {
        // console.log(event);
        const { value, name } = event.target;
        setCharacter({...character, [name]: value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hiciste submit", character);
        setCharacter({...character, name : "", password : ""});
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" key="name" type="text" onChange={handleChange} value={character.name} />
            <input name="password" key="password" type="password" onChange={handleChange} value={character.password}/>
            <button>Enviar</button>
            <p>{character.name}</p>
        </form>
    );

}


