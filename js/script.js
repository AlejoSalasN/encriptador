const encriptar = () => {
  let expresion = /^[a-z0-9\!¡¿?.,;:*+/&%$#_ -]+$/gi;
  const mensaje = document.getElementById("mensaje").value;
  if (expresion.test(mensaje)) {
    document.getElementById("imagen").classList.add("ocultar");
    document.getElementById("encriptado").classList.remove("ocultar");
    let mensaje_encriptado = "";
    let i = 0;
    while (i < mensaje.length) {
      let letra = mensaje.slice(i, i + 1);
      mensaje_encriptado =
        mensaje_encriptado +
        (letra === "a"
          ? "ai"
          : letra === "e"
          ? "enter"
          : letra === "i"
          ? "imes"
          : letra === "o"
          ? "ober"
          : letra === "u"
          ? "ufat"
          : letra);
      i++;
    }
    document.getElementById("m-encriptado").value = mensaje_encriptado;
  } else {
    alert("Ingrese una cadena de texto válida");
  }
};

const desencriptar = () => {
  let expresion = /^[a-z0-9\!¡¿?.,;:*+/&%$#_ -]+$/gi;
  const mensaje_encriptado = document.getElementById("mensaje").value;
  console.log(mensaje_encriptado);
  if (
    expresion.test(mensaje_encriptado) &&
    contienePatronEncriptacion(mensaje_encriptado)
  ) {
    document.getElementById("imagen").classList.add("ocultar");
    document.getElementById("encriptado").classList.remove("ocultar");
    let mensaje_desencriptado = "";
    let i = 0;
    while (i < mensaje_encriptado.length) {
      let letra = mensaje_encriptado.slice(i, i + 1);
      mensaje_desencriptado = mensaje_desencriptado + letra;
      if (letra === "a") {
        i += 1;
      } else if (letra === "e") {
        i += 4;
      } else if (letra === "i" || letra === "o" || letra === "u") {
        i += 3;
      }
      i++;
    }
    document.getElementById("m-encriptado").value = mensaje_desencriptado;
  } else {
    alert("Ingrese una cadena de texto válida");
  }
};

const contienePatronEncriptacion = (texto) => {
  const patronesEncriptacion = ["ai", "enter", "imes", "ober", "ufat"];
  return patronesEncriptacion.some((patron) => texto.includes(patron));
};

const copiar = () => {
  const texto_copiar = document.getElementById("m-encriptado").value;
  navigator.clipboard
    .writeText(texto_copiar)
    .then(() => {
      alert("Texto copiado.");
    })
    .catch((error) => {
      alert("Error al copiar: ", error);
    });
};