console.log("Todo funciona")

const funcion1 = (texto1, texto2) => {
    let mensaje = "";
    concatenado = texto1 + " " + texto2;
    console.log(concatenado.toLowerCase());
  };
  
 funcion1("Chulicornio", "style");

  const funcion2 = () => {
    let num1 = parseInt(prompt("Introduce un numero:"))
    let num2 = parseInt(prompt("Introduce otro numero:"))

    if (num1 == num2){
        alert(`El primer numero(${num1}) y el segundo numero(${num2}) son iguales.`)
    }
    else if (num1 > num2){
        alert(`El primer numero(${num1}) es mayor el segundo numero(${num2}).`)
    }
    else{
        alert(`El segundo numero(${num2}) es mayor el primer numero(${num1}).`)
    }
    }
  funcion2()

const rellenarUl = () => {
    const deportes = ["Fornite", "Leage of legends", "Counter Strike", "Warcraft", "Mario Bros"];
    deportes.unshift("Freefire")
    deportes.push("Sonic")
    deportes.sort()
    console.log(deportes)


    const linea = document.createDocumentFragment();
 

    for (const step of deportes) {
      const box = document.createElement("LI");
      box.textContent = step;
      linea.appendChild(box);
    }
  
    const focusul= document.getElementById("ejercicio4");
    focusul.appendChild(linea);
  }
  rellenarUl()


