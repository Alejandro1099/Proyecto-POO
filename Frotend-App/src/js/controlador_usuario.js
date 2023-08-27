let empresas_lista;
let lista_productos;

const cargarEmpresas = async()=>{
    const respuesta = await fetch('http://localhost:3000/empresas', {
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    });
    empresas_lista = await respuesta.json();
    console.log("lista de empresas ", empresas_lista);
}

const renderizarEmpresas = ()=>{
    document.getElementById("contenido").innerHTML = "";
    empresas_lista.forEach(empresa => {
        document.getElementById("contenido").innerHTML+=`
        <div class="card" style="width: 15rem;" id="card_empresa">
            <img src="${empresa.foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${empresa.nombre}</h5>
                <a href="menu.html" class="btn btn-primary">ver productos</a>
            </div>
        </div>`
    });
}

cargarEmpresas().then(()=>{
    renderizarEmpresas()
    }).catch((error)=>{
        console.log(`Error al obtener las empresas ${error}`)
});



//registrar un nuevo usuario
document.getElementById("form_registro").addEventListener("submit", function(event){
    event.preventDefault();//evita que se envie la informacion del formulario a otro sitio
    
    const nombre = document.getElementById("name").value;
    const contra = document.getElementById("pass").value;

    const data = {
        nombre: nombre,
        pass: contra
    }

    fetch("http://localhost:3000/usuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            console.log("Usuario registrado", result);
            $('#modalMsj').modal('show'); // Mostrar la ventana modal de éxito
        })
        .catch(error => {
            console.error("No se registro la empresa");
        });
});

function limpiarform() {
    document.getElementById("nombre").value = "";
    document.getElementById("pass").value = "";
    $('#modalMsj').modal('hide'); // Ocultar la ventana modal
}