let btnEnvio = document.getElementById("btnEnvio");
let btnLimpiar = document.getElementById("btnLimpiar");
/* */
let URLJson = `https://jsonplaceholder.typicode.com/users`;

document.addEventListener("DOMContentLoaded", function() {
    btnLimpiar.addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById("nom").value = "";
        document.getElementById("ape").value = "";
        document.getElementById("nac").value = "";
    })
    
    btnEnvio.addEventListener("click", function(e) {
        e.preventDefault();
        let nom = document.getElementById("nom").value;
        let ape = document.getElementById("ape").value;
        let nac = document.getElementById("nac").value;
        
        let infoPersona = {
            nombre: nom,
            apellido: ape,
            fechaNacimiento: nac
        };
        /*console.log(infoPersona);*/
    
        fetch(URLJson, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(infoPersona)
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
                if (nom != "" && ape != "" && nac != "") {
                    console.log(`Esta es la respuesta que nos envia el servidor: `, data);
                    let infoFormulario = document.getElementById("infoDeFormulario");
                    let AuxInfo = document.createElement("p");
                    AuxInfo.innerHTML += `
                        <strong>Nombre de la Persona:</strong> ${data.name}
                        <br>
                        <strong>Apellido de la Persona:</strong> ${data.apellido}
                        <br>
                        <strong>Fecha de Nacimiento de la Persona:</strong> ${data.fechaNacimiento}
                    `;
                    infoFormulario.appendChild(AuxInfo);
                    infoFormulario.classList.add("borderAux");
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Algo salió mal!',
                        text: 'Alguno de los campos esta vacio',
                    });
                }
        })
        .catch(function(error) {
            console.log(`Se ha encontrado un error del siguiente tipo: `, error);
        })
    })
})