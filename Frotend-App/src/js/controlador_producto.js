let lista_productos;

const cargarProductos = async()=>{
    const respuestaProductos = await fetch('http://localhost:3000/producto', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    });
    lista_productos = await respuestaProductos.json();
    console.log("Lista de productos: ", lista_productos);
};

const renderizarProductos = ()=>{
    document.getElementById("contenedor_productos").innerHTML = "";
    lista_productos.forEach(producto => {
        document.getElementById("contenedor_productos").innerHTML+=`
        <div class="card mb-3" style="max-width: 500px; id="card_empresa">
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${producto.foto}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text">Precio L. ${producto.precio}</p>
            <p class="card-text">ID del producto: ${producto.id_producto}</p>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" class="btn btn-danger">Borrar 🗑</button>
                <a href=""><button type="button" class="btn btn-warning">Actualizar 🔃</button></a>
            </div>
            </div>
        </div>
        </div>
    </div>`
    });
}

cargarProductos().then(()=>{
    renderizarProductos()
    }).catch((error)=>{
        console.log("Error al renderizar los productos", error)
});


//codigo para guardar un nuevo producto desde el formulario
document.getElementById("form_empresa").addEventListener("submit", function(event){
    event.preventDefault();//evita que se envie la informacion del formulario a otro sitio
    
    const nombre = document.getElementById("txt_name").value;
    const descripcion = document.getElementById("txt_descripcion").value;
    const foto = document.getElementById("foto").value;
    const id_empresa = document.getElementById("id_empresa").value;
    const precio = document.getElementById("id_precio").value

    const data = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        foto: foto,
        id_producto: id_empresa
    }

    fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            console.log("Producto agregado a la BD", result);
            $('#modalMsj').modal('show'); // Mostrar la ventana modal de éxito
        })
        .catch(error => {
            console.log(error);
        });
});

function limpiarform() {
    document.getElementById("txt_name").value = "";
    document.getElementById("txt_descripcion").value = "";
    document.getElementById("foto").value = "";
    document.getElementById("id_empresa").value = "";
    document.getElementById("id_precio").value= "";
    $('#modalMsj').modal('hide'); // Ocultar la ventana modal
}