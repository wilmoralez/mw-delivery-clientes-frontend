//Arreglo que almacena los productos agregados al carrito de compras 
let carrito = [];

// Arreglos de JSONs
ropa = [
    {
        id:1,
        nombre:'Vestido largo tie-dye',
        precio:975, 
        imagen: 'img/rmpb1.jpg'//
    },

    {
        id:2,
        nombre: 'Jeans cargo tiro alto',
        precio: 1995,
        imagen: 'img/rmpb2.jpg'
    },

    {
        id:3,
        nombre: 'Blazer básica',
        precio: 1195,
        imagen: 'img/rmpb3.jpg'
    },

    {
        id:4,
        nombre: 'Camiseta con print esotérico',
        precio: 295,
        imagen: 'img/rmpb4.jpg'
    },
    
]

zapatos = [
    {
        id: 1,
        nombre: 'Alpargata cuña lazada',
        precio: 1295,
        imagen: 'img/zmpb1.jpg'
    },

    {
        id: 2,
        nombre: 'Zapatillas retro contraste',
        precio: 975,
        imagen: 'img/zmpb2.jpg'
    },

    {
        id: 3,
        nombre: 'Alpargata Combinada',
        precio: 1195,
        imagen: 'img/zmpb3.jpg'
    },

    {
        id: 4,
        nombre: 'Zapatillas deportivas volumen',
        precio: 1295,
        imagen: 'img/zmpb4.jpg'
    },
]

accesorios = [
    {
        id: 1,
        nombre:'pack 2 collares piedras y espiral',
        precio: 295,
        imagen:'img/ampb1.jpg'
    },

    {
        id: 2,
        nombre:'Gafas de sol rectangulares',
        precio: 375,
        imagen:'img/ampb2.jpg'
    },

    {
        id: 3,
        nombre:'Funda iPhone flores',
        precio: 225,
        imagen:'img/ampb3.jpg'
    },

    {
        id: 4,
        nombre:'Gorro Beanie',
        precio: 225,
        imagen:'img/ampb4.jpg'
    }
]



// Funciones de renderizado
function generarRopa() {
    ropa.forEach(function(producto) {
        document.getElementById('ropa').innerHTML+=
        ` 
        <div class="card" style="width: 10rem;">
            <img src="${producto.imagen}" class="card-img-top" >
            <div class="card-body">
                <h6 class="card-title">${producto.nombre}</h6>
                <p class="card-text">${producto.precio} HNL</p>
                <button type="button" class="btn btn-primary btn-comprar" data-bs-toggle="modal" data-bs-target="#modalComprar${producto.id}">
                    comprar
                </button>
            </div>
        </div>
        `
        modalComprar(producto);
    });  
}
generarRopa();

function generarZapatos() {
    zapatos.forEach(function(producto) {
    document.getElementById('zapatos').innerHTML+=
    ` 
    <div class="card" style="width: 10rem;">
    <img src="${producto.imagen}" class="card-img-top" >
    <div class="card-body">
      <h6 class="card-title">${producto.nombre}</h6>
      <p class="card-text">${producto.precio} HNL</p>
      
    </div>
    </div
    `
    });  
}
generarZapatos();

function generarAccesorios() {
    accesorios.forEach(function(producto) {
    document.getElementById('accesorios').innerHTML+=
    ` 
    <div class="card" style="width: 10rem;">
    <img src="${producto.imagen}" class="card-img-top" >
    <div class="card-body">
      <h6 class="card-title">${producto.nombre}</h6>
      <p class="card-text">${producto.precio} HNL</p>
      
    </div>
    </div
    `
    });  
}
generarAccesorios();

//Ventana modal del boton "comprar"
function modalComprar(producto) {
    document.getElementById('ropa').innerHTML+=
    `
    <div class="modal fade" id="modalComprar${producto.id}" tabindex="-1" aria-labelledby="modalComprarLabel${producto.id}" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modalComprarLabel${producto.id}">${producto.nombre}</h1>
                </div>
                <div class="modal-body">
                <select id="talla-${producto.id}" class="form-select" aria-label="Default select example">
                    <option selected>Seleccionar talla</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btns-modal" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary btns-modal"  onclick="agregarAlCarrito(${producto.id})"  data-bs-dismiss="modal">Agregar al carrito</button>
                </div>
            </div>
        </div>
    </div>
    `
}

function agregarAlCarrito(id){
    let producto = ropa.find(p => p.id === id);
    let talla = document.getElementById(`talla-${id}`).value;
    let item ={
        producto: producto,
        talla: talla
    };
    carrito.push(item);
    actualizarCarrito();
}

function actualizarCarrito(){
    let modalCarrito = document.getElementById('modalBody');
    modalCarrito.innerHTML = '';
    carrito.forEach(item => {
        modalCarrito.innerHTML += 
        `
        <p>${item.producto.nombre} - Talla ${item.talla}</p>
        <b style="text-aling: right">${item.producto.precio} HNL</b>
        <hr>
        `
        if (carrito.length > 1) {
            document.getElementById('finalizar-compra').classList.remove('d-none');
          } else {
            document.getElementById('finalizar-compra').classList.add('d-none');
          }
    });
}

//Ventana modal del carrito que muestra los productos agregados 
function modalCarrito() {
    document.getElementById('btnCarrito').innerHTML+=
    `
    <div class="modal fade" id="modalCarrito" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Tu carrito</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modalBody">
      </div>
      <div class="modal-footer">
        <button type="button" id="finalizar-compra" class="btn btn-primary  btns-modal">Finalizar compra</button>
      </div>
    </div>
  </div>
</div>
    `
}
modalCarrito();
