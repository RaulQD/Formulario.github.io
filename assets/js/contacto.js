const inputName = document.querySelector('#nombre'),
    inputLastName = document.querySelector('#apellidos'),
    inputAsunto = document.querySelector('#asunto'),
    inputEmail = document.querySelector('#correo'),
    inputPhone = document.querySelector('#telefono'),
    inputMessage = document.querySelector('#mensaje'),
    inputCountry = document.querySelector('#pais').value,
    inputCity = document.querySelector('#ciudad'),
    inputProvinces = document.querySelector('#provincia'),
    inputResidents = document.querySelector('#distrito');

const groupForm = document.querySelector('#formulario');
const btnSend = document.querySelector('#button')

//EXPRECIONES REGULARES 
const regEx = {
    asunto: /^[a-zA-Z\ñ\Ñ\Á\É\Í\Ó\Ú\á\é\í\ó\ú\Ü\ü\s]{3,100}$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: /^[a-zA-Z\ñ\Ñ\Á\É\Í\Ó\Ú\á\é\í\ó\ú\Ü\ü\s]{3,400}$/,
    nombre: /^[a-zA-Z\ñ\Ñ\Á\É\Í\Ó\Ú\á\é\í\ó\ú\Ü\ü\s]{3,400}$/, // Letras y espacios, pueden llevar acentos
    apellido: /^[a-zA-Z\ñ\Ñ\Á\É\Í\Ó\Ú\á\é\í\ó\ú\Ü\ü\s]{3,400}$/,
    ciudad: /^[a-zA-Z\ñ\Ñ\Á\É\Í\Ó\Ú\á\é\í\ó\ú\Ü\ü\s]{3,400}$/,
    telefono: /^\d{9}$/ // de nueve Numeros
}

eventListener();
function eventListener() {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    inputName.addEventListener('blur', validarformulario);
    inputLastName.addEventListener('blur', validarformulario);
    inputAsunto.addEventListener('blur', validarformulario);
    inputEmail.addEventListener('blur', validarformulario);
    inputPhone.addEventListener('blur', validarformulario);
    inputMessage.addEventListener('blur', validarformulario);
    inputCity.addEventListener('blur', validarformulario);
    inputProvinces.addEventListener('blur', validarformulario);
    inputResidents.addEventListener('blur', validarformulario);

    groupForm.addEventListener('submit', enviarMensaje);

}
function iniciarApp() {
    btnSend.classList.add('btn-disabled');
    btnSend.disabled = true;
}

function validarformulario(e) {
    const errores = document.querySelector('.error');
    if (errores) {
        errores.remove();
    };
    if (e.target.value.length > 0) {
        e.target.classList.add('input-correcto');
        e.target.classList.remove('input-incorrecto');
    } else {
        e.target.classList.add('input-incorrecto');
        e.target.classList.remove('input-correcto');
        mensajeAlert('Todos los campos son obligatorios');
    }
    if (e.target.name === 'nombre') {
        if (regEx.nombre.test(e.target.value)) {
            e.target.classList.add('input-correcto');
            e.target.classList.remove('input-incorrecto');
        } else {
            e.target.classList.add('input-incorrecto');
            e.target.classList.remove('input-correcto');
            mensajeAlert('Ingresa nombre correctamente');
        };
    }
    if (e.target.name === 'apellidos') {
        if (regEx.apellido.test(e.target.value)) {
            e.target.classList.add('input-correcto');
            e.target.classList.remove('input-incorrecto');
        } else {
            e.target.classList.add('input-incorrecto');
            e.target.classList.remove('input-correcto');
            mensajeAlert('Ingresa apellido correctamente');
        };
    };
    if (e.target.name === 'asunto') {
        if (regEx.asunto.test(e.target.value)) {
            e.target.classList.add('input-correcto');
            e.target.classList.remove('input-incorrecto');
        } else {
            e.target.classList.add('input-incorrecto');
            e.target.classList.remove('input-correcto');
            mensajeAlert('Ingresa asunto correctamente');
        };
    };
    if (e.target.name === 'correo') {
        if (regEx.email.test(e.target.value)) {
            e.target.classList.add('input-correcto');
            e.target.classList.remove('input-incorrecto');
        } else {
            e.target.classList.add('input-incorrecto');
            e.target.classList.remove('input-correcto');
            mensajeAlert('Ingresa correo correctamente');
        };
    };
    if (e.target.name === 'telefono') {
        if (regEx.telefono.test(e.target.value)) {
            e.target.classList.add('input-correcto');
            e.target.classList.remove('input-incorrecto');
        } else {
            e.target.classList.add('input-incorrecto');
            e.target.classList.remove('input-correcto');
            mensajeAlert('Ingresa telefono correctamente');
        };
    };
    if (e.target.name === 'mensaje') {
        if (regEx.message.test(e.target.value)) {
            e.target.classList.add('input-correcto');
            e.target.classList.remove('input-incorrecto');
        } else {
            e.target.classList.add('input-incorrecto');
            e.target.classList.remove('input-correcto');
            mensajeAlert('Ingresa un mensaje');
        };
    };
    //VALIDAR FORMULARIO DE PAÍS
    if (e.target.name === 'ciudad') {
        if (regEx.ciudad.test(e.target.value)) {
            e.target.classList.add('input-correcto');
            e.target.classList.remove('input-incorrecto');
        } else {
            e.target.classList.add('input-incorrecto');
            e.target.classList.remove('input-correcto');
            mensajeAlert('Ingresa tú ciudad');
        };
    };
    if (e.target.name === 'provincia') {
        if (regEx.ciudad.test(e.target.value)) {
            e.target.classList.add('input-correcto');
            e.target.classList.remove('input-incorrecto');
        } else {
            e.target.classList.add('input-incorrecto');
            e.target.classList.remove('input-correcto');
            mensajeAlert('Ingresa tú provincia');
        }
    }
    if (e.target.name === 'distrito') {
        if (regEx.ciudad.test(e.target.value)) {
            e.target.classList.add('input-correcto');
            e.target.classList.remove('input-incorrecto');
        } else {
            e.target.classList.add('input-incorrecto');
            e.target.classList.remove('input-correcto')
            mensajeAlert('Ingresa tú distrito');
        }
    }
    if (regEx.nombre.test(nombre.value) && regEx.apellido.test(apellidos.value) && regEx.asunto.test(asunto.value) && regEx.email.test(correo.value) && regEx.telefono.test(telefono.value) && regEx.message.test(mensaje.value) && regEx.ciudad.test(ciudad.value) && regEx.ciudad.test(provincia.value) && regEx.ciudad.test(distrito.value)) {
        btnSend.disabled = false;
        btnSend.classList.remove('btn-disabled');
    } else {
        btnSend.disabled = true;
    }
};
function mensajeAlert(mensaje) {
    const mensajeAlert = document.createElement('p');
    const formBtn = document.querySelector('.form__buton');
    mensajeAlert.textContent = mensaje;
    mensajeAlert.classList.add('form-incorrecto', 'error');
    const error = document.querySelectorAll('p.error');
    if (error.length === 0) {
        groupForm.insertBefore(mensajeAlert, formBtn);
    }
}
function enviarMensaje(e) {
    e.preventDefault();
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';
    setTimeout(() => {
        spinner.style.display = 'none';
        //SE CREA EL MENSAJE ALERT
        const mensajeOk = document.createElement('p');
        mensajeOk.textContent = 'Datos ingresados correctamente'
        mensajeOk.classList.add('form-correcto');
        groupForm.insertBefore(mensajeOk, spinner);
        setTimeout(() => {
            mensajeOk.remove();
            resetForm();
        }, 2000);
    }, 3000);
}
function resetForm() {
    groupForm.reset();
    iniciarApp();
}