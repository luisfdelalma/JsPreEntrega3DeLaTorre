let motos = [
    {
        marca: "Yamaha",
        modelo: "Nmax",
        categoria: "Automáticas",
        id: 828978,
        cilindraje: 150,
        precio: 3100,
        sisAbs: "Si",
        potencia: 15.15,
        torque: 13.9,
        inventario: 432,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2021/03/nmax_3.png"
    },
    {
        marca: "Yamaha",
        modelo: "Xmax",
        categoria: "Automáticas",
        id: 759158,
        cilindraje: 292,
        precio: 7000,
        sisAbs: "Si",
        potencia: 27.6,
        torque: 29,
        inventario: 223,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2019/09/xmax_verde.png"
    },
    {
        marca: "Yamaha",
        modelo: "YCZ",
        categoria: "Urbanas",
        id: 459273,
        cilindraje: 110,
        precio: 1300,
        sisAbs: "No",
        potencia: 7.3,
        torque: 8.6,
        inventario: 349,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/08/yamaha-ycz-110-negra-con-azul-1.png"
    },
    {
        marca: "Yamaha",
        modelo: "YBRZ",
        categoria: "Urbanas",
        id: 150982,
        cilindraje: 124,
        precio: 1660,
        sisAbs: "No",
        potencia: 10,
        torque: 9.9,
        inventario: 347,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2021/03/azul.png"
    },
    {
        marca: "Yamaha",
        modelo: "SZRR",
        categoria: "Urbanas",
        id: 184656,
        cilindraje: 149,
        precio: 1840,
        sisAbs: "No",
        potencia: 11.9,
        torque: 12.8,
        inventario: 284,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/sz_gris_verde-1.jpg"
    },
    {
        marca: "Yamaha",
        modelo: "FZ 2.0",
        categoria: "Urbanas",
        id: 576427,
        cilindraje: 149,
        precio: 2060,
        sisAbs: "No",
        potencia: 13,
        torque: 12.8,
        inventario: 227,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2021/04/fz25_negra.png"
    },
    {
        marca: "Yamaha",
        modelo: "FZ 25",
        categoria: "Urbanas",
        id: 414928,
        cilindraje: 249,
        precio: 3100,
        sisAbs: "Si",
        potencia: 20.6,
        torque: 20,
        inventario: 138,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2019/08/fz25_azul.jpg"
    },
    {
        marca: "Yamaha",
        modelo: "XTZ 125",
        categoria: "Enduro",
        id: 394048,
        cilindraje: 124,
        precio: 2025,
        sisAbs: "No",
        potencia: 10,
        torque: 9.9,
        inventario: 305,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/xtz-125-azul.jpg"
    },
    {
        marca: "Yamaha",
        modelo: "XTZ 150",
        categoria: "Enduro",
        id: 603730,
        cilindraje: 149,
        precio: 2460,
        sisAbs: "No",
        potencia: 12.3,
        torque: 13.1,
        inventario: 346,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2019/09/xtz150_blanca.png"
    },
    {
        marca: "Yamaha",
        modelo: "XTZ 250",
        categoria: "Enduro",
        id: 785552,
        cilindraje: 249,
        precio: 4780,
        sisAbs: "Si",
        potencia: 20.4,
        torque: 20.5,
        inventario: 258,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2019/11/xtz250-2020-azul.png"
    },
    {
        marca: "Yamaha",
        modelo: "MT-07",
        categoria: "Alto cilindraje",
        id: 107072,
        cilindraje: 689,
        precio: 9800,
        sisAbs: "Si",
        potencia: 72.4,
        torque: 67,
        inventario: 172,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2019/05/mt07-gris.jpg"
    },
    {
        marca: "Yamaha",
        modelo: "MT-09",
        categoria: "Alto cilindraje",
        id: 841336,
        cilindraje: 890,
        precio: 11500,
        sisAbs: "Si",
        potencia: 117.3,
        torque: 93,
        inventario: 325,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/MT09-2022-COLOR_AZUL.jpg"
    },
    {
        marca: "Yamaha",
        modelo: "MT-10",
        categoria: "Alto cilindraje",
        id: 480239,
        cilindraje: 998,
        precio: 17400,
        sisAbs: "Si",
        potencia: 163.6,
        torque: 112,
        inventario: 133,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/Mt10_gris.png"
    },
    {
        marca: "Yamaha",
        modelo: "R1",
        categoria: "Alto cilindraje",
        id: 265125,
        cilindraje: 998,
        precio: 19000,
        sisAbs: "Si",
        potencia: 197.26,
        torque: 113.3,
        inventario: 543,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2020/02/R1-2022-COLOR_AZUL.jpg"
    },
    {
        marca: "Suzuki",
        modelo: "Avenis",
        categoria: "Automáticas",
        id: 215553,
        cilindraje: 124.3,
        precio: 2408,
        sisAbs: "No",
        potencia: 8.6,
        torque: 10,
        inventario: 432,
        imgMoto: "https://suzuki.com.co/sites/default/files/2022-10/Medida%20para%20segmento-%20819x460%20blanca_0.png"
    },
    {
        marca: "Suzuki",
        modelo: "Burgman",
        categoria: "Automáticas",
        id: 864901,
        cilindraje: 124,
        precio: 2214,
        sisAbs: "No",
        potencia: 8.3,
        torque: 9.7,
        inventario: 53,
        imgMoto: "https://suzuki.com.co/sites/default/files/2022-10/BURGMAN%20NEGRA.png"
    },
    {
        marca: "Suzuki",
        modelo: "Address",
        categoria: "Automáticas",
        id: 606235,
        cilindraje: 113,
        precio: 1930,
        sisAbs: "No",
        potencia: 7.7,
        torque: 9.2,
        inventario: 123,
        imgMoto: "https://suzuki.com.co/sites/default/files/2022-08/suzuki-address-azul-matte.png"
    },
    {
        marca: "Suzuki",
        modelo: "DR 150",
        categoria: "Enduro",
        id: 859697,
        cilindraje: 149,
        precio: 2174,
        sisAbs: "No",
        potencia: 12.2,
        torque: 12.7,
        inventario: 654,
        imgMoto: "https://suzuki.com.co/sites/default/files/2021-03/Amarillo%20Negro.png"
    },
    {
        marca: "Suzuki",
        modelo: "Gixxer 150",
        categoria: "Urbanas",
        id: 701347,
        cilindraje: 149,
        precio: 2019,
        sisAbs: "Si",
        potencia: 18.9,
        torque: 14,
        inventario: 230,
        imgMoto: "https://suzuki.com.co/sites/default/files/2021-07/Negro_0.png"
    },
    {
        marca: "Suzuki",
        modelo: "Gixxer 250",
        categoria: "Urbanas",
        id: 507599,
        cilindraje: 249,
        precio: 3000,
        sisAbs: "Si",
        potencia: 26.1,
        torque: 22.2,
        inventario: 286,
        imgMoto: "https://suzuki.com.co/sites/default/files/2021-04/gixxer-250-negra.png"
    },
    {
        marca: "Suzuki",
        modelo: "GSX 125R",
        categoria: "Urbanas",
        id: 405481,
        cilindraje: 125,
        precio: 1471,
        sisAbs: "No",
        potencia: 11,
        torque: 9.1,
        inventario: 163,
        imgMoto: "https://suzuki.com.co/sites/default/files/2020-06/3%20AZUL_0.png"
    },
    {
        marca: "Suzuki",
        modelo: "GSX-S1000",
        categoria: "Alto cilindraje",
        id: 842289,
        cilindraje: 999,
        precio: 14000,
        sisAbs: "Si",
        potencia: 145,
        torque: 120,
        inventario: 326,
        imgMoto: "https://suzuki.com.co/sites/default/files/2021-12/GSX-S1000-Azul.png"
    },
    {
        marca: "Suzuki",
        modelo: "Hayabusa",
        categoria: "Alto cilindraje",
        id: 491278,
        cilindraje: 1340,
        precio: 18400,
        sisAbs: "Si",
        potencia: 190,
        torque: 150,
        inventario: 215,
        imgMoto: "https://suzuki.com.co/sites/default/files/2021-11/Hayabusa%20blanca.png"
    },
    {
        marca: "Suzuki",
        modelo: "GSX-S 750ZA",
        categoria: "Alto cilindraje",
        id: 890266,
        cilindraje: 749,
        precio: 10084,
        sisAbs: "Si",
        potencia: 115,
        torque: 81,
        inventario: 190,
        imgMoto: "https://suzuki.com.co/sites/default/files/2021-04/GSXS-750ZA%20BLANCA.png"
    },
    {
        marca: "Honda",
        modelo: "DIO LED",
        categoria: "Automáticas",
        id: 549158,
        cilindraje: 109.2,
        precio: 1438,
        sisAbs: "No",
        potencia: 7.9,
        torque: 8.9,
        inventario: 184,
        imgMoto: "https://zagamotos.com/wp-content/uploads/2019/12/DIO-DLX-Gris-360-lado1.jpg"
    },
    {
        marca: "Honda",
        modelo: "PCX 150",
        categoria: "Automáticas",
        id: 253474,
        cilindraje: 149.3,
        precio: 3000,
        sisAbs: "No",
        potencia: 13,
        torque: 13.5,
        inventario: 231,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/pcx_lateral_der_azul-5a5a0.png"
    },
    {
        marca: "Honda",
        modelo: "NAVI",
        categoria: "Automáticas",
        id: 469058,
        cilindraje: 109.19,
        precio: 1426,
        sisAbs: "No",
        potencia: 7.9,
        torque: 8.91,
        inventario: 131,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/nueva-navi-mix-negro-2023.png"
    },
    {
        marca: "Honda",
        modelo: "CRF 250R",
        categoria: "Enduro",
        id: 452051,
        cilindraje: 249,
        precio: 8738,
        sisAbs: "No",
        potencia: 39,
        torque: 18.8,
        inventario: 334,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/CRF250.png"
    },
    {
        marca: "Honda",
        modelo: "CB 125F",
        categoria: "Urbanas",
        id: 590786,
        cilindraje: 124.7,
        precio: 1530,
        sisAbs: "No",
        potencia: 8.41,
        torque: 9.65,
        inventario: 219,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/Rojo-49b78.png"
    },
    {
        marca: "Honda",
        modelo: "X-Blade 160",
        categoria: "Urbanas",
        id: 145591,
        cilindraje: 162.71,
        precio: 2320,
        sisAbs: "Si",
        potencia: 13.7,
        torque: 14.7,
        inventario: 150,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/Honda_XBlade_Roja.png"
    },
    {
        marca: "Honda",
        modelo: "CB 190R",
        categoria: "Urbanas",
        id: 642663,
        cilindraje: 184.4,
        precio: 2710,
        sisAbs: "No",
        potencia: 16.62,
        torque: 16.3,
        inventario: 131,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/CB190R_Red.png"
    },
    {
        marca: "Honda",
        modelo: "CB 1000R",
        categoria: "Alto cilindraje",
        id: 855880,
        cilindraje: 998,
        precio: 13000,
        sisAbs: "Si",
        potencia: 144,
        torque: 104,
        inventario: 166,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/CB1000R_roja2.png"
    },
    {
        marca: "Honda",
        modelo: "CB 650R",
        categoria: "Alto cilindraje",
        id: 192612,
        cilindraje: 649,
        precio: 9938,
        sisAbs: "Si",
        potencia: 94,
        torque: 64,
        inventario: 230,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/CB650R_colores_gris.png"
    },
    {
        marca: "Honda",
        modelo: "CBR 1000 SP1",
        categoria: "Alto cilindraje",
        id: 815572,
        cilindraje: 1000,
        precio: 18000,
        sisAbs: "Si",
        potencia: 214,
        torque: 113,
        inventario: 219,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/CBR-1000RR-SP1.png"
    },
]

// ----------------------------- SCRIPT DE SECCION DE MOTOS -------------------------------
// ----------------------------------------------------------------------------------------

let columnaMotos = document.getElementById("columnaMotos")
renderMotos(motos)

let columnaCarrito = document.getElementById("columnaCarrito")
let carrito = []

let buscador = document.getElementById("buscarMotos")
buscador.addEventListener("input", renderProFiltrados)
let desde = document.getElementById("desdeMotos")
desde.addEventListener("input", renderProFiltrados)
let hasta = document.getElementById("hastaMotos")
hasta.addEventListener("input", renderProFiltrados)


function renderProFiltrados(e) {
    let proFiltrado =
        motos.filter(producto =>
            (producto.marca.toLowerCase().includes(buscador.value.toLowerCase()) && (producto.precio >= Number(desde.value) && producto.precio <= Number(hasta.value))) ||
            (producto.categoria.toLowerCase().includes(buscador.value.toLowerCase()) && (producto.precio >= Number(desde.value) && producto.precio <= Number(hasta.value))) ||
            (producto.modelo.toLowerCase().includes(buscador.value.toLowerCase()) && (producto.precio >= Number(desde.value) && producto.precio <= Number(hasta.value)))
        )
    renderMotos(proFiltrado)
}

function renderMotos(arrayMotos) {
    columnaMotos.innerHTML = ""
    for (const moto of arrayMotos) {
        let tarjetaMoto = document.createElement("div")
        tarjetaMoto.className = "cardMoto"
        tarjetaMoto.id = moto.id
        tarjetaMoto.innerHTML =
            `<h4>${moto.marca + moto.modelo}</h4>
        <img src=${moto.imgMoto} alt=${moto.modelo}>
        <p>Categoría: ${moto.categoria}</p>
        <p>Cilindraje: ${moto.cilindraje}</p>
        <p>Precio: $${moto.precio}</p>
        <p>ABS?: ${moto.sisAbs}</p>
        <p>Potencia: ${moto.potencia}</p>
        <p>Torque: ${moto.torque}</p>
        <p>Und. disponibles: ${moto.inventario}</p>
        <button class="botonMoto" id=${moto.id}>Añadir al carrito</button>
        `
        columnaMotos.appendChild(tarjetaMoto)
    }
    let botones = document.getElementsByClassName("botonMoto")
    for (const boton of botones) {
        boton.addEventListener("click", addCarrito)
    }
}

function addCarrito(e) {
    let prodBuscado = motos.find(producto => producto.id == e.target.id)
    let posProdBuscado = carrito.findIndex(producto => producto.id == prodBuscado.id)
    if (posProdBuscado != -1) {
        carrito[posProdBuscado].unidades++
        carrito[posProdBuscado].subtotal = carrito[posProdBuscado].unidades * carrito[posProdBuscado].precioUnitario
    } else {
        carrito.push({
            id: prodBuscado.id,
            nombre: prodBuscado.marca + " " + prodBuscado.modelo,
            precioUnitario: prodBuscado.precio,
            unidades: 1,
            subtotal: prodBuscado.precio
        })
    }
    rendCarrito(carrito)
}

function rendCarrito(arrayDeProductos) {
    columnaCarrito.innerHTML = ""
    for (const producto of arrayDeProductos) {
        columnaCarrito.innerHTML += `
        <div class="elementoCarrito">
        <p>${producto.nombre}: </p>
        <p>${producto.precioUnitario}: </p>
        <p>${producto.unidades}: </p>
        <p>${producto.subtotal}: </p>
        </div>
        `
    }
    let total = carrito.reduce((acc, valorActual)=>acc+valorActual.subtotal, 0)
    columnaCarrito.innerHTML+=`
    <h3>TOTAL: $${total}</h3>
    `
} 

// -------------------------- SCRIPT DE SECCION DE ACCESORIOS ------------------------------
// ----------------------------------------------------------------------------------------

let columnaAccesorios = document.getElementById("columnaAccesorios")
renderAccesorios(accesorios)

let buscarAccesorios = document.getElementById("buscarAccesorios")
buscarAccesorios.addEventListener("input", renderAcceFiltrados)
let desdeAcce = document.getElementById("desdeAccesorios")
desdeAcce.addEventListener("input", renderAcceFiltrados)
let hastaAcce = document.getElementById("hastaAccesorios")
hastaAcce.addEventListener("input", renderAcceFiltrados)


function renderAcceFiltrados(e) {
    let acceFiltrados =
        accesorios.filter(producto =>
            (producto.marca.toLowerCase().includes(buscarAccesorios.value.toLowerCase()) && (producto.precio >= Number(desdeAcce.value) && producto.precio <= Number(hastaAcce.value))) ||
            (producto.categoria.toLowerCase().includes(buscarAccesorios.value.toLowerCase()) && (producto.precio >= Number(desdeAcce.value) && producto.precio <= Number(hastaAcce.value))) ||
            (producto.modelo.toLowerCase().includes(buscarAccesorios.value.toLowerCase()) && (producto.precio >= Number(desdeAcce.value) && producto.precio <= Number(hastaAcce.value)))
        )
    renderAccesorios(acceFiltrados)
}

function renderAccesorios(arrayAcce) {
    columnaAccesorios.innerHTML = ""
    for (const acce of arrayAcce) {
        let tarjetaAcce = document.createElement("div")
        tarjetaAcce.className = "cardAcce"
        tarjetaAcce.id = acce.referencia
        tarjetaAcce.innerHTML =
            `<h4>${acce.marca + acce.referencia}</h4>
        <img src=${acce.imgurl} alt=${acce.referencia}>
        <p>Categoría: ${acce.categoria}</p>
        <p>Descripcion: ${acce.descripcion}</p>
        <p>Precio: $${acce.precio}</p>
        <button class="botonAcce" id=${acce.referencia}>Añadir al carrito</button>
        `
        columnaAccesorios.appendChild(tarjetaAcce)
    }
    let botonAcce = document.getElementsByClassName("botonAcce")
    for (const boton of botonAcce) {
        boton.addEventListener("click", addCarrito)
    }
}

function addCarrito(e) {
    let prodBuscado = motos.find(producto => producto.id == e.target.id)
    let posProdBuscado = carrito.findIndex(producto => producto.id == prodBuscado.id)
    if (posProdBuscado != -1) {
        carrito[posProdBuscado].unidades++
        carrito[posProdBuscado].subtotal = carrito[posProdBuscado].unidades * carrito[posProdBuscado].precioUnitario
    } else {
        carrito.push({
            id: prodBuscado.id,
            nombre: prodBuscado.marca + " " + prodBuscado.modelo,
            precioUnitario: prodBuscado.precio,
            unidades: 1,
            subtotal: prodBuscado.precio
        })
    }
    rendCarrito(carrito)
}

function rendCarrito(arrayDeProductos) {
    columnaCarrito.innerHTML = ""
    for (const producto of arrayDeProductos) {
        columnaCarrito.innerHTML += `
        <div class="elementoCarrito">
        <p>Producto: ${producto.nombre}: </p>
        <p>Precio unitario: $${producto.precioUnitario} </p>
        <p>Cantidad: ${producto.unidades} </p>
        <p>Subtotal: $${producto.subtotal}: </p>
        </div>
        `
    }
    let total = carrito.reduce((acc, valorActual)=>acc+valorActual.subtotal, 0)
    columnaCarrito.innerHTML+=`
    <h3>TOTAL: $${total}</h3>
    `
}