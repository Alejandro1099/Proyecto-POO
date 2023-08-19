let empresas_lista;

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
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${empresa.foto}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${empresa.nombre}</h5>
            <p class="card-text">${empresa.descripcion}</p>
            <a href="edit-info.html"><p class="card-text"><small class="text-body-secondary">Editar informacion</small></p></a>
            </div>
        </div>
        </div>
    </div>`
    });
}

cargarEmpresas().then(()=>{
    renderizarEmpresas()
    }).catch((error)=>{
        console.log(`Error al obtener las empresas ${error}`)
});