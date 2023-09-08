let nombrePersona = document.getElementById("nom");
let apellidoPersona = document.getElementById("ape");
let fechaNacimientoPersona = document.getElementById("nac");
/* */
let btnEnvio = document.getElementById("btnEnvio");
let btnLimpiar = document.getElementById("btnLimpiar");
/* */
let infoFormulario = document.getElementById("infoDeFormulario");
/* */
let URLJson = 'https://jsonplaceholder.typicode.com/users';

btnLimpiar.addEventListener("click", function(e) {
    e.preventDefault();
    nombrePersona.value = "";
    apellidoPersona.value = "";
    fechaNacimientoPersona.value = "";
})

btnEnvio.addEventListener("click", function(e) {
    e.preventDefault();
    nom = nombrePersona.value;
    ape = apellidoPersona.value;
    nac = fechaNacimientoPersona.value;
    
    let infoPersona = {
        nombre: nom,
        apellido: ape,
        fechaNacimiento: nac
    };
    /* console.log(infoPersona); */

    fetch(URLJson, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(infoPersona)
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        if (data.nombre != "" && data.apellido != "" && data.fechaNacimiento != "") {
            console.log(`Esta es la respuesta que nos envia el servidor: `, data)
            let AuxInfo = document.createElement("p");
            AuxInfo.innerHTML += `
                <strong>Nombre de la Persona:</strong> ${data.nombre}
                <br>
                <strong>Apellido de la Persona:</strong> ${data.apellido}
                <br>
                <strong>Fecha de Nacimiento de la Persona:</strong> ${data.fechaNacimiento}
            `;
            infoFormulario.appendChild(AuxInfo);
            infoFormulario.classList.add("borderAux")
        } else {
            console.log("Faltan datos");
            alert("Faltan datos");
        }
        /* */
    })
    .catch(function(error) {
        console.log(`Se ha encontrado un error del siguiente tipo: `,error);
    })

        
})
