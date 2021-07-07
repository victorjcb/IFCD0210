
//Lista Peliculas
const coleccion = ["Star Wars","Star Treck","Firefly","Lost in the space","Alien"]
coleccion.push("Ewoks")
coleccion.unshift("Depredador")


const box= document.createDocumentFragment()

for (const step of coleccion){
 const itemList = document.createElement("OPTION");
 itemList.textContent = step;
 box.appendChild(itemList);
}

const pelicula = document.getElementById("micoleccion");
pelicula.appendChild(box);

// Libro
const mostrarlibro = () =>{

const libro = {
        titulo: "Crees en los Chulicornios?",
        escritor: "Roberto Vivero Rodríguez",
        paginas: 12,
        genero: "PopUp",
        editorial: "Bruño",
        portada: "https://images-na.ssl-images-amazon.com/images/I/71n079jwcdL.jpg",
        video: "https://www.youtube.com/embed/pe7WntYYsVw",
    }

const datosLibro = document.createElement("TABLE");
datosLibro.innerHTML = `<tr><td><strong>Titulo: </strong>${libro.titulo}</td>
<td rowspan=5>PORTADA:<br><img alt="Portada" height="220" src="${libro.portada}"></td>
<strong><td rowspan=5>VIDEO:<br><iframe height="220" src="${libro.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td></tr>
<tr><td><strong>Escritor: </strong>${libro.escritor}</td></tr>
<tr><td><strong>Paginas: </strong>${libro.paginas}</td></tr>
<tr><td><strong>Genero: </strong>${libro.genero}</td></tr>
<tr><td><strong>Editorial: </strong>${libro.editoria}</td></tr>`
javascript.appendChild(datosLibro)
}
mostrarlibro()

//Classe

class formas {
    constructor(tipo, ancho, alto){
        this.tipo = tipo;
        this.ancho = ancho;
        this.alto = alto;
    }
    calculararea(){
        this.ancho * this.alto
    
      }
    }
