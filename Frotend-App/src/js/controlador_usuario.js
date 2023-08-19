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
        <div id="restaurantes">
            <a href="menu.html"><img src="${empresa.foto}" alt="portada de categoria" id="portada1"></a>
            <label id="nombre">${empresa.nombre}</label>
        </div>`
    });
}

cargarEmpresas().then(()=>{
    renderizarEmpresas()
    }).catch((error)=>{
        console.log(`Error al obtener las empresas ${error}`)
});