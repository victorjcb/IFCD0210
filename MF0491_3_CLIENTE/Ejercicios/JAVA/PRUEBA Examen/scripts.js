console.log("Comunicacion extablecida.")

const unionStrings = (cadena1, cadena2) => {
    let mensaje = "";
    mensaje = cadena1 + " " + cadena2;
    console.log(mensaje.toLowerCase());
  };

unionStrings("Ying","Yang")

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
/*
  const rellenarUl = () => {
    
    const deportes = ["baloncesto", "tenis", "volleyball", "futbol", "pingpong"];
    // Creo un fragmento para añadir los LI que hago
    const contentbox = document.createDocumentFragment();
  
    //Uso un bucle for porque es un numero limitado de elementos
    //Uso un bucleo for of porque iterar todo el array
    for (const step of deportes) {
      //Para cada item creo un LI
      const box = document.createElement("LI");
      //Igualo el contenido del LI a al deporte (String) correspondiente
      box.textContent = step; 
      //Añado el LI al Fragmento
      box.appendChild(contentbox);
    }
  }
  
    // Obtengo el UL donde voy inserlar los LI
    const boxfocus = document.getElementById("sports");
    //Inserto el fragmento
    boxfocus.appendChild(contentbox);

*/


const rellenarPeliFav = () => {
    const peliculaFav = {
          nombre: "Serenity",
          director: "Joss Whedon",
          año: 2005,
          duracion: 119,
          imagen: "https://images-na.ssl-images-amazon.com/images/I/61LgRCxZviL._SY445_.jpg",
          gener: "Ciencia ficcion",
        };
      
        const parrafoPelicula = document.createElement("P");
        parrafoPelicula.innerHTML = `<strong>${peliculaFav.nombre}</strong> de <em>${peliculaFav.director}
      </em><br> Año${peliculaFav.año}. Duracion ${peliculaFav.duracion} minutos.<br>
      <img src="${peliculaFav.imagen}" alt="${peliculaFav.nombre}">`;
      
        javascript.appendChild(parrafoPelicula);      
    }
      

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
    
    divJS.appendChild(parrafoObjeto);
    
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
    