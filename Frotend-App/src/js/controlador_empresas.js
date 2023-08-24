let empresas_lista;
let unaEmpresa;

const cargarEmpresas = async()=>{
    const respuesta = await fetch('http://localhost:3000/empresas', {
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    });
    empresas_lista = await respuesta.json();
    console.log("Lista de empresas: ", empresas_lista);
}

const renderizarEmpresas = ()=>{
    document.getElementById("contenedor_empresas").innerHTML = "";
    empresas_lista.forEach(empresa => {
        document.getElementById("contenedor_empresas").innerHTML+=`
        <div class="card mb-3" style="max-width: 500px; id="card_empresa">
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${empresa.foto}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${empresa.nombre}</h5>
            <p class="card-text">${empresa.descripcion}</p>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <a href="empresas/${empresa._id}"><button type="button" class="btn btn-danger">Borrar 🗑</button></a>
                <a href="./edit-info.html"><button type="button" class="btn btn-warning">Actualizar 🔃</button></a>
            </div>
            </div>
        </div>
        </div>
    </div>`
    });
}

cargarEmpresas().then(()=>{
    renderizarEmpresas()
    }).catch((error)=>{
        console.log(`Error al obtener las empresas`, error)
});

//codigo para guardar una nueva empresa desde el formulario
document.getElementById("form_empresa").addEventListener("submit", function(event){
    event.preventDefault();//evita que se envie la informacion del formulario a otro sitio
    
    const nombre = document.getElementById("txt_name").value;
    const descripcion = document.getElementById("txt_descripcion").value;
    const foto = document.getElementById("foto").value;
    const id_empresa = document.getElementById("id_empresa").value;

    const data = {
        nombre: nombre,
        descripcion: descripcion,
        foto: foto,
        id_empresa: id_empresa
    }

    fetch("http://localhost:3000/empresas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            console.log("Empresa agregada a la BD", result);
            $('#modalMsj').modal('show'); // Mostrar la ventana modal de éxito
        })
        .catch(error => {
            console.error("No se registro la empresa");
        });
});

function limpiarform() {
    document.getElementById("txt_name").value = "";
    document.getElementById("txt_descripcion").value = "";
    document.getElementById("foto").value = "";
    document.getElementById("id_empresa").value = "";
    $('#modalMsj').modal('hide'); // Ocultar la ventana modal
}

/*en el html agregar el _id de mongo en el action del formualario tanto en Delte Upadte*/
/*en edit-info.html redirigir para actualizar*/