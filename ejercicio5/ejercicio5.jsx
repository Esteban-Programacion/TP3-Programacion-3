function Ejercicio5() {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [operacion, setOperacion] = React.useState("sumar");
  const [resultado, setResultado] = React.useState("");
  const [botonDeshabilitado, setBotonDeshabilitado] = React.useState(false);

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

    setResultado(`Resultado: ${res}`);
  }

  React.useEffect(() => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (operacion === "dividir" && (n1 === 0 || n2 === 0)) {
      setBotonDeshabilitado(true);
    } else {
      setBotonDeshabilitado(false);
    }

    setResultado(""); 
  }, [num1, num2, operacion]);

  return (
    <div>
      <h2>Ejercicio 5</h2>
      <form onSubmit={calcular}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <select
          value={operacion}
          onChange={(e) => setOperacion(e.target.value)}
        >
          <option value="sumar">Sumar</option>
          <option value="restar">Restar</option>
          <option value="multiplicar">Multiplicar</option>
          <option value="dividir">Dividir</option>
        </select>
        <button type="submit" disabled={botonDeshabilitado}>
          Calcular
        </button>
      </form>
      <p>{resultado}</p>
    </div>
  );
}