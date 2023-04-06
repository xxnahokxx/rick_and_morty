
export default function validation(inputs) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const errors = {};

    if(inputs.userName === "") {
        errors.userName = "Correo no puede ser vacio.";
    } else if (!regexEmail.test(inputs.userName)) {
        errors.userName = "Debe ser un correo electronico";
    } else if (inputs.userName.length > 35) {
        errors.userName = "el correo no puede tener más de 35 caracteres.";
    }
    if (inputs.password === "") {
        errors.password = "Digita la contraseña";
    } else if (inputs.password.length < 6 || inputs.password.length > 10 ) {
        errors.password = "La contraseña debe tener una longitud entre 6 a 10 caracteres.";
    }

    return errors;
}
