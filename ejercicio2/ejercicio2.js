const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

const formulario = document.getElementById("formulariofiltro");
const inputTexto = document.getElementById("texto-filtro");
const listaResultado = document.getElementById("lista-palabras");
const mensajeError = document.getElementById("error");

formulario.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const textoBuscado = inputTexto.value.trim();

  mensajeError.textContent = "";
  listaResultado.innerHTML = "";

  if (textoBuscado === "") {
    mensajeError.textContent = "Ingrese palabra o letra a buscar.";
    return;
  }

  const filtradas = palabras.filter(palabra =>
    palabra.toLowerCase().includes(textoBuscado.toLowerCase())
  );

  if (filtradas.length === 0) {
    listaResultado.innerHTML = "<li>Error, no se encontro la palabra buscada.</li>";
  } else {
    
    filtradas.forEach(palabra => {
      const li = document.createElement("li");
      li.textContent = palabra;
      listaResultado.appendChild(li);
    });
  }
});