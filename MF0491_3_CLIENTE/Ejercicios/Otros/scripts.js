//Ejercicio 1
console.log("Hola Mundo");

const divJava = document.getElementById("javascript");

// Ejercicio 2
const concatenarStrings = (cadena1, cadena2) => {
  let mensaje = "";
  mensaje = cadena1 + " " + cadena2;
  console.log(mensaje.toLowerCase());
};

concatenarStrings("Hola", "Mundo");

// Ejercicio 3
const compararNumeros = () => {
  let num1 = parseInt(prompt("Introduce numero1"));
  let num2 = parseInt(prompt("Introduce numero2"));

  if (num1 === num2) {
    alert(`${num1} es igual a ${num2}`);
  } else if (num1 > num2) {
    alert(`${num1} es mayor que ${num2}`);
  } else {
    alert(`${num1} es menor que ${num2}`);
  }
};

// Ejercicio 4

const rellenarOl = () => {
  //Declaro el array con los deportes
  const lista = ["Tigre", "Gorila", "Elefante", "Jirafa", "Hipopotamo"];
  // Creo un fragmento para añadir los LI que hago
  const valor = document.createDocumentFragment();

  lista.push("Cocodrilo")
  lista.unshift("Leon")

  //Uso un bucle for porque es un numero limitado de elementos
  //Uso un bucleo for of porque iterar todo el array
  for (const step of lista) {
    //Para cada item creo un LI
    const box = document.createElement("LI");
    //Igualo el contenido del LI a al step (String) correspondiente
    box.textContent = step;
    //Añado el LI al Fragmento
    valor.appendChild(box);
  }

  // Obtengo el UL donde voy inserlar los LI
  const ulEjer4 = document.getElementById("rellenarLista");
  //Inserto el fragmento
  ulEjer4.appendChild(valor);
};

rellenarOl();

// Ejercicio 5

const rellenarLibroFav = () => {
  const libroFav = {
    title: "La Historia de León.",
    escritor: "Ismael Alonso Alonso",
    paginas: 320,
    year: 1969,
    img: "https://m.media-amazon.com/images/I/41CBpv+hq3L.jpg",
    genero: "historia",
  };

  const parrafoLibro = document.createElement("P");
  parrafoLibro.innerHTML = `Mi libro favorito es <strong>${libroFav.title}</strong> cuyo escritor es <em>${libroFav.escritor}
</em> tiene <span class="pelicula"> ${libroFav.paginas} paginas (Genero:${libroFav.genero}).</span><br>
<img src="${libroFav.img}" alt="${libroFav.title}">
`;

  divJava.appendChild(parrafoLibro);
};

rellenarLibroFav();

// Ejercicio 6

class Figura {
  constructor(tipo, altura, anchura) {
    this.tipo = tipo;
    this.altura = altura;
    this.anchura = anchura;
  }

  calcularArea() {
    return this.altura * this.anchura;
  }
  imprimir() {
    return `Soy un ${this.tipo} mi anchura es ${this.anchura} y mi altura es ${this.altura}.`;
  }
}

const rectangulo = new Figura("rectangulo", 12, 48);

const parrafoObjeto = document.createElement("P");

let mensajeObjeto = rectangulo.imprimir();
mensajeObjeto += ` mi area es igual a ${rectangulo.calcularArea()}`;
parrafoObjeto.textContent = mensajeObjeto;

divJava.appendChild(parrafoObjeto);

//Ejercicio 7
const gallery = document.getElementById("gallery");
gallery.addEventListener("click", (e) => {
  e.target.classList.add("red");
});

//Ejercicio 8
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  compararNumeros();
});