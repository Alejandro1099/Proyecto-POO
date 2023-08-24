let empresas_lista;

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