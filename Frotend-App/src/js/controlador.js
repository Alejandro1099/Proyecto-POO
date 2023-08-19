let motoristas_registrados;

const cargarMotoristas = async() =>{
    const respuesta = await fetch('http://localhost:3000/motoristas', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    });
    motoristas_registrados = await respuesta.json();
    console.log("motoristas", motoristas_registrados);
};

const renderizarMotoristas = ()=>{
    document.getElementById("motoristas-registrados").innerHTML="";
    motoristas_registrados.forEach(motorista => {
        document.getElementById("motoristas-registrados").innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img src="${motorista.foto}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${motorista.nombre}</h5>
            <p class="card-text">${motorista.correo}</p>
        </div>
        </div>`;
    });
}

cargarMotoristas().then(()=>{
    renderizarMotoristas()
    }).catch((error)=>{
        console.log(`Error al obtener los datos ${error}`)
});
