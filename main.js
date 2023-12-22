// const nombre = document.getElementById('inputName');
// const apellido = document.getElementById('inputLastName');

// nombre.addEventListener("keydown", event => {
//     if (event.key >= 48 && event.key <= 57) {
//       event.preventDefault();
//     }
//   });


function enviarFormulario() {
    sonido = document.getElementById('sonidoEnviado');

    const nombre = document.getElementById('inputName').value;
    const apellido = document.getElementById('inputLastName').value;
    const hombreCheck = document.getElementById('hombreCheck').checked;
    const mujerCheck = document.getElementById('mujerCheck').checked;
    const terminos = document.getElementById('terminos').checked;

    if (nombre == '') {
        alert('Faltó de rellenar el campo nombre');
    }
    if (apellido == '') {
        alert('Faltó de rellenar el campo apellido');
    }
    if (hombreCheck == false && mujerCheck == false) {
        alert('No has seleccionado tu genero');
    }
    if (terminos == false) {
        alert('Acepta los terminos y condiciones');
    }

    else {
        limpiar();
        sonido.play()
        
    }
}

function limpiar() {
    document.getElementById('inputName').value = '';
    document.getElementById('inputLastName').value = '';
    document.getElementById('hombreCheck').checked = false;
    document.getElementById('mujerCheck').checked = false;
    document.getElementById('terminos').checked = false;
}