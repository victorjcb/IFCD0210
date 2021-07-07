//Declaracion datos
const nombre = document.getElementById("datnombre")
const apellido = document.getElementById("datapellido")
const edad = document.getElementById("datedad")
const ciudad = document.getElementById("datciudad")
const mascota = document.getElementById("datmascota")

//Declaracion hobbies
const hobbies = ["Animales imaginarios","Cuentos fantasticos","Leyendas sin sentido","Rituales magicos"]
const divhobbies = document.getElementById("hobbies");

//Declaracion libros
const librofav = {
  titulo: "Dune",
  autor: "Frank Herbert",
  paginas: "600",
  genero: "SciFy",
  img: "https://www.libroadictos.com/wp-content/uploads/2020/04/Dune-portada-1-506x530.jpg",
  leido: true,
}

//Asignacion datos
nombre.textContent = "Víctor"
apellido.textContent = "Cuesta"
edad.textContent = 41
ciudad.textContent = "León"
mascota.textContent = `🦄Chulicornio`

//Asignacion hobbies

const rellenarHobbies = () => {
    const fragment = document.createDocumentFragment();
  
    for (const hobbie of hobbies) {
      const itemList = document.createElement("LI");
      itemList.textContent = hobbie;
      fragment.appendChild(itemList);
    }
    divhobbies.appendChild(fragment);
  };
  
  rellenarHobbies();

//Asignacion libros
const plibrofav = document.getElementById("librofav");
plibrofav.innerHTML = `Mi libro favorito es <strong> ${librofav.titulo}</strong> escrito por ${librofav.autor}`;
const portada = document.createElement("img");
portada.src = librofav.img;
plibrofav.appendChild(portada);
plibrofav.innerHTML = `Paginas: ${librofav.paginas}`;