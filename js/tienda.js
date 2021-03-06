var productos =[
    {
        id:1,
        avatar:'arbolito-interior.jpg',
        articulo:'Arbolito',
        name:'Arbolito',
        descricion:'Arbolito perfumado de inteior',
        precio:'50',
        categoria:'interior',
    },
    {
        id:2,
        avatar:'perfume-interior.jpg',
        articulo:'Desodorante',
        name:'Desodorante',
        descricion:'Desodorante de interior coco/limon',
        precio:'160',
        categoria:'interior',
    },
    {   
        id:3,
        avatar:'cepillo.jpg',
        articulo:'Cepillo',
        name:'Cepillo',
        descricion:'Cepillo para torpedo',
        precio:'260',
        categoria:'interior',
    },
    {   
        id:4,
        avatar:'plumero.jpg',
        articulo:'Plumero',
        name:'Plumero',
        descricion:'Plumero super gay para interior',
        precio:'300',
        categoria:'interior',
    },
    {   
        id:5,
        avatar:'paño-microfibra.jpg',
        articulo:'Paños x3',
        name:'Paños',
        descricion:'Paño de microfibra para secado',
        precio:'120',
        categoria:'kit',
    },
    {
        id:6,
        avatar:'kit-limpieza.jpg',
        articulo:'Kit limpieza',
        name:'Kitlimpieza',
        descricion:'Balde, shampoo, perfume, paño',
        precio:'2000',
        categoria:'kit',
    },
    {
        id:7,
        avatar:'limpieza-interior.jpg',
        articulo:'Descontaminacion',
        name:'Descontaminacion',
        descricion:'Limpieza profunda de interior y tapizados',
        precio:'1700',
        categoria:'servicio',
    },
    {
        id:8,
        avatar:'pulido.jpg',
        articulo:'Pulido',
        name:'Pulido',
        descricion:'Pulido de carroceria y opticas',
        precio:'2500',
        categoria:'servicio',
    },
    {
        id:9,
        avatar:'esponja.jpg',
        articulo:'Esponja',
        name:'Esponja',
        descricion:'Esponja limpieza exterior',
        precio:'50',
        categoria:'exterior',
    },
    {
        id:10,
        avatar:'shampoo.jpg',
        articulo:'Shampoo Toxic Shine',
        name:'Shampoo',
        descricion:'Shampoo para autos con tratamiento',
        precio:'600',
        categoria:'exterior',
    }
]

//Declaracion de Variables
let $espacio = document.querySelector("#espacio"); //Espacio Div---------------
let carrito = []; //ARRAY DE CARRITO
let total = 0; // VARIABLE DEL $TOTAL
let $listaCarrito =  document.querySelector("#listaCarrito");
let $total = document.querySelector("#total"); //SPAN DE LA VAR TOTAL

window.addEventListener("load" ,function(){
    
    for (let info of productos){

        // CREACION DE LA CARD
        var card = document.createElement("div");
        card.classList.add("card","col-6","my-2","col-md-4","border-bottom-0","border-right-0");
        // CREACION IMAGEN DE LA CARD
        var cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top","img-fluid");
        cardImg.setAttribute("src","img/productos/" + info.avatar);
        // CREACION DE CARD-BODY
        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        // CREACION DE TITULO DEL ARTICULO <H3>
        var cardTitulo = document.createElement("h3");
        cardTitulo.classList.add("card-title");
        // cardTitulo.setAttribute("id", "articulo");       
        cardTitulo.textContent = info.articulo ;
        // CREACION DE PRECIO <P>
        var cardPrecio = document.createElement("p");
        cardPrecio.classList.add("card-subtitle","precio");
        // cardPrecio.setAttribute("id","precio");
        cardPrecio.textContent = info.precio;
        // CREACION DE DESCRIPCION <P>
        var cardDescripcion = document.createElement("p");
        cardDescripcion.classList.add("card-text");
        cardDescripcion.textContent = info.descricion ;
        // CREACION DE FOOTER DE CARD
        var cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer","footerCard");
        // CREACION DE BOTON AÑADIR
        var cardBoton = document.createElement("button"); 
        cardBoton.classList.add("btn","btn-block","btn-añadir",); 
        cardBoton.setAttribute("marcador",info["id"]); 
        cardBoton.textContent = "Añadir.";
        cardBoton.addEventListener("click", addCarrito);
        //INSERTAMOS
        cardBody.appendChild(cardTitulo);
        cardBody.appendChild(cardPrecio);
        cardBody.appendChild(cardDescripcion);
        cardFooter.appendChild(cardBoton);
        card.appendChild(cardImg);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);
        $espacio.appendChild(card);            
    }  

var numProductos = productos.length;
var botonBuscar = document.getElementById("buscar"); //Boton Buscar-----------

botonBuscar.addEventListener("click" , function (){

var categorias = document.getElementById("categorias");//categorias----------
var seleccion = categorias.selectedIndex;              //categorias----------
var categorias = categorias.options[seleccion].value;  //categorias----------

var campoBuscador = document.getElementById("buscador");//Buscador-----------
var campoBuscador = campoBuscador.value;                //Buscador-----------
var campoBuscador = campoBuscador.toLowerCase();        //Buscador-----------    

// Restaura HTML
$espacio.innerHTML=" ";
//Muestra Grafica de cada card
function renderItems() {

    for (let info of productos){

        if (categorias == "" || categorias == info.categoria){

            // CREACION DE LA CARD
            var card = document.createElement("div");
            card.classList.add("card","col-6","my-2","col-md-4","border-bottom-0","border-right-0");
            // CREACION IMAGEN DE LA CARD
            var cardImg = document.createElement("img");
            cardImg.classList.add("card-img-top","img-fluid");
            cardImg.setAttribute("src","img/productos/" + info.avatar);
            // CREACION DE CARD-BODY
            var cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            // CREACION DE TITULO DEL ARTICULO <H3>
            var cardTitulo = document.createElement("h3");
            cardTitulo.classList.add("card-title");
            // cardTitulo.setAttribute("id", "articulo");       
            cardTitulo.textContent = info.articulo ;
            // CREACION DE PRECIO <P>
            var cardPrecio = document.createElement("p");
            cardPrecio.classList.add("card-subtitle","precio");
            // cardPrecio.setAttribute("id","precio");
            cardPrecio.textContent = info.precio;
            // CREACION DE DESCRIPCION <P>
            var cardDescripcion = document.createElement("p");
            cardDescripcion.classList.add("card-text");
            cardDescripcion.textContent = info.descricion ;
            // CREACION DE FOOTER DE CARD
            var cardFooter = document.createElement("div");
            cardFooter.classList.add("card-footer","footerCard");
            // CREACION DE BOTON AÑADIR
            var cardBoton = document.createElement("button"); 
            cardBoton.classList.add("btn","btn-block","btn-añadir",); 
            cardBoton.setAttribute("marcador",info["id"]); 
            cardBoton.textContent = "Añadir.";
            cardBoton.addEventListener("click", addCarrito);
            //INSERTAMOS
            cardBody.appendChild(cardTitulo);
            cardBody.appendChild(cardPrecio);
            cardBody.appendChild(cardDescripcion);
            cardFooter.appendChild(cardBoton);
            card.appendChild(cardImg);
            card.appendChild(cardBody);
            card.appendChild(cardFooter);
            $espacio.appendChild(card);
        }
        
    }
}
renderItems();
});

//FUNCION DE ADDCARRITO
function addCarrito(){
    console.log("se agrego al carrito");
    carrito.push(this.getAttribute("marcador"));
    console.log("id del los art: "+carrito);
    console.log("cant en carrito: "+carrito.length);
    
    //CALCULO DEL TOTAL
    calcularTotal();
    console.log("total: "+total);
    //RENDERIZA CARRITO
    renderizarCarrito();
}

function renderizarCarrito(){
    //vaciamos lista
    $listaCarrito.textContent = "";
    //quitamos duplicados NI IDEA QUE SIGNIFICA
    let carritoSinDuplicado = [...new Set(carrito)];
    //Generamos nodos a partir de carrito
    carritoSinDuplicado.forEach(function(item, indice) {

        let miItem = productos.filter(function(itemBaseDatos){
            return itemBaseDatos['id'] == item;
        });

        //CUENTA NUMEROS DE VECES Q SE REPITE EL PRODUCTO
        let numeroUnidadesItem = carrito.reduce(function(total,itemId) {
            return itemId === item ? total += 1 : total;
        },0);

        //Creamos el nodo del producto del carrito
        let nuevoProducto = document.createElement("li");
        nuevoProducto.classList.add("list-group-item","text-right","mx-2");
        nuevoProducto.textContent = `${numeroUnidadesItem} x ${miItem[0]['articulo']} - $${miItem[0]['precio']}`;
        
        //BOTON BORRAR

        let miBoton = document.createElement("button");
        miBoton.classList.add("btn", "btn-danger","mx-5");
        miBoton.textContent="X";
        miBoton.style.marginLeft="1rem";
        miBoton.setAttribute("item",item);
        miBoton.addEventListener("click",borrarItemCarrito);
        //Mezclamos nodos
        nuevoProducto.appendChild(miBoton);
        $listaCarrito.appendChild(nuevoProducto);    
    })
}

function borrarItemCarrito(){
    console.log("Se apreto el boton de borrar")
    let id = this.getAttribute("item");
    // listaCarrito = carrito.filter(function(carritoId){      
    //     return carritoId !== id;
    // });

    for (var j=0; j<carrito.length ; j++){
        if  (carrito[j]==id)
        {
            pos = j;
        }
    }

    console.log("id del los art antes del splice: "+carrito);
    console.log("Longitud del carrito antes del splice:"+carrito.length);

    carrito.splice(pos,1);
    
    console.log("Id del producto en boton de borrar: "+id);
    console.log("id del los art despues del splice: "+carrito);
    console.log("Longitud del carrito despues del splice: "+carrito.length);
    
    //carrito.splice(id-1, 1);

    //volvemos a renderizar
    renderizarCarrito();
    calcularTotal();
}

function calcularTotal(){
    //Limpiamos precio anterior
    total =0;
    // Recorremos array del carrito
    for(let item of carrito){
        //Obtener el precio de cada elemento
        let miItem = productos.filter(function(itemBaseDatos){
            
            return itemBaseDatos["id"] == item;
        });
        
        total = total + parseInt(miItem[0]["precio"]);
        // console.log("la var miItem es de tipo: "+ typeof miItem[0]["precio"]);
        // console.log("la var total es de tipo: "+ typeof total);
    }
    //Imprime el precio
       
    $total.textContent = total;
    
}

});
