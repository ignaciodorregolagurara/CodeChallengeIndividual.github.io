let nombrePersona = document.getElementById("nom");
let apellidoPersona = document.getElementById("ape");
let fechaNacimientoPersona = document.getElementById("nac");
let btnEnvio = document.getElementById("btnEnvio");
let URLJson = `https://jsonplaceholder.typicode.com/users`;

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

    fetch(URLJson)
        .then(function(response) {
            response.json()
        })
        .then(function() {
            
        })

    /* console.log(infoPersona); */
})
