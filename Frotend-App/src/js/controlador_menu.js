//renedrizar productos
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
    document.getElementById("opcion1").innerHTML = "";
    lista_productos.forEach(producto => {
        document.getElementById("opcion1").innerHTML+=`
        <div class="card" style="width: 15rem;" id="card_producto">
            <img src="${producto.foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <h5 class="card-title">Precio: L. ${producto.precio}</h5>
                <a href="menu.html" class="btn btn-primary">Ordenar</a>
            </div>
        </div>`
    });
}

cargarProductos().then(()=>{
    renderizarProductos()
    }).catch((error)=>{
        console.log("Error al renderizar los productos", error)
});