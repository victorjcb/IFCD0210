console.log("Hola mundo!...")
//Concatenar
const divJS = document.getElementById("javascript");
const concatenarStrings = (cadena1, cadena2) => {
    let mensaje = "";
    mensaje = cadena1 + cadena2;
    console.log (mensaje.toLowerCase());
}
concatenarStrings ("Esto ","funciona")

//Comparar numeros
/*
const compararnumeros = () => {
    let numero1 = parseInt(prompt("Introduce un numero:"));
    let numero2 = parseInt(prompt("Introduce otro numero:"));
    if (numero1 == numero2) {
        alert(`${numero1} es igual que ${numero2}`)
    } else if(numero1 > numero2){
        alert(`${numero1} es mayor que ${numero2}`)
    }else{
        alert(`${numero1} es menor que ${numero2}`)
    }
}
compararnumeros()
*/


//Declaro el array con los deportes
const deportes = ["Zapping","Gaming","Siesting","Sofing","Meriending"];
// Creo un fragmento para añadir los LI que hago
const fragment = document.createDocumentFragment();

//Uso un bucle for porque es un numero limitado de elementos
//Uso un bucleo for of porque iterar todo el array
for (const deporte of deportes) {
  //Para cada item creo un LI
  const itemList = document.createElement("LI");
  //Igualo el contenido del LI a al deporte (String) correspondiente
  itemList.textContent = deporte;
  //Añado el LI al Fragmento
  fragment.appendChild(itemList);
}

// Obtengo el UL donde voy inserlar los LI
const listadeportes = document.getElementById("rellenarconarray");
//Inserto el fragmento
listadeportes.appendChild(fragment);



//Pelicula favorita
/*
const peliculafav = {
    title: "Hackers",
    director: "Iain Softley",
    año: "1995.",
    duracion: "107 min.",
    portada: "https://www.covercaratulas.com/ode/mini/dvd-51034.jpg",
    genero: "Supense",
} 


const parrafopelicula = document.getElementById ('peliculafav')
parrafopelicula.innerHTML =`Mi pelicula favorita es ${peliculafav.title} (${peliculafav.genero}) del director ${peliculafav.director}. Se extreno en el año ${peliculafav.año} y dura ${peliculafav.duracion}`


// hacer figuras

class Figura {
    constructor(tipo, altura, anchura){
    this.tipo = tipo;
    this.altura = altura;
    this.anchura = anchura;
    }
calculaArea(){
    return this.altura * this.
}*/



