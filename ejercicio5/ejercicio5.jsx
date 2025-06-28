function Ejercicio5() {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [operacion, setOperacion] = React.useState("sumar");
  const [resultado, setResultado] = React.useState("");
  const [botonDeshabilitado, setBotonDeshabilitado] = React.useState(false);

  function manejarCambioNum1(e) {
    const valor = e.target.value;
    setNum1(valor);
    verificarDivision(valor, num2, operacion);
    setResultado("");
  }

  function manejarCambioNum2(e) {
    const valor = e.target.value;
    setNum2(valor);
    verificarDivision(num1, valor, operacion);
    setResultado("");
  }

  function manejarCambioOperacion(e) {
    const valor = e.target.value;
    setOperacion(valor);
    verificarDivision(num1, num2, valor);
    setResultado("");
  }

  function verificarDivision(n1, n2, operacionActual) {
    const valor1 = parseFloat(n1);
    const valor2 = parseFloat(n2);

    if (operacionActual === "dividir" && valor2 === 0) {
      setBotonDeshabilitado(true);
    } else {
      setBotonDeshabilitado(false);
    }
  }

  function calcular(e) {
    e.preventDefault();

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Por favor ingrese dos numeros.");
      return;
    }

    let res = "";

    switch (operacion) {
      case "sumar":
        res = n1 + n2;
        break;
      case "restar":
        res = n1 - n2;
        break;
      case "multiplicar":
        res = n1 * n2;
        break;
      case "dividir":
        res = n1 / n2;
        break;
    }

    setResultado("Resultado: " + res);
  }

  return (
    <div>
      <h2>Ejercicio 5</h2>
      <h3>Ingrese los numeros a calcular</h3>
      <form onSubmit={calcular}>
        <label htmlFor="numero1">Numero 1 </label>
        <input
          id="numero1"
          type="number"
          value={num1}
          onChange={manejarCambioNum1}
        />
        <br /> <br />
        <label htmlFor="numero2">Numero 2 </label>
        <input
          id="numero2"
          type="number"
          value={num2}
          onChange={manejarCambioNum2}
        />
        <br /> <br />
        <label htmlFor="operacion">Operación </label>
        <select
          id="operacion"
          value={operacion}
          onChange={manejarCambioOperacion}
        >
          <option value="sumar">Sumar</option>
          <option value="restar">Restar</option>
          <option value="multiplicar">Multiplicar</option>
          <option value="dividir">Dividir</option>
        </select>
        <br /> <br />
        <button type="submit" disabled={botonDeshabilitado}>
          Calcular
        </button>
      </form>
      <p>{resultado}</p>
    </div>
  );
}