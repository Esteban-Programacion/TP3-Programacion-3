const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
const boton = document.getElementById("calcular");

const validarInputs = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operacion = document.getElementById("operacion").value;

  boton.disabled = false;

  if (operacion === "dividir" && (num2 === 0 || num1 === 0)) {
    boton.disabled = true;
  } else {
    resultado.textContent = "Resultado: ";
  }
};

document.getElementById("num1").addEventListener("input", validarInputs);
document.getElementById("num2").addEventListener("input", validarInputs);
document.getElementById("operacion").addEventListener("change", validarInputs);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operacion = document.getElementById("operacion").value;

  if (isNaN(num1) || isNaN(num2)) {
    resultado.textContent = "Resultado: Ingrese los numeros a calcular";
    return;
  }

  let res;

  switch (operacion) {
    case "sumar":
      res = num1 + num2;
      break;
    case "restar":
      res = num1 - num2;
      break;
    case "multiplicar":
      res = num1 * num2;
      break;
    case "dividir":
      res = num1 / num2;
      break;
  }

  resultado.textContent = `Resultado: ${res}`;
});
