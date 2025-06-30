function Ejercicio6() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [mensaje, setMensaje] = React.useState("");
  const [colorClase, setColorClase] = React.useState("");

  function calcularIMC(e) {
    e.preventDefault();

    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (isNaN(p) || isNaN(a) || a <= 0) {
      setMensaje("Por favor ingresa peso y altura validos");
      setColorClase("amarillo");
      return;
    }

    const imc = p / (a * a);

    if (imc < 18.5) {
      setMensaje(`IMC: ${imc.toFixed(2)} - Nivel bajo`);
      setColorClase("amarillo");
    } else if (imc >= 18.5 && imc <= 24.9) {
      setMensaje(`IMC: ${imc.toFixed(2)} - Nivel normal`);
      setColorClase("verde");
    } else if (imc >= 25 && imc <= 29.9) {
      setMensaje(`IMC: ${imc.toFixed(2)} - Nivel de sobrepeso`);
      setColorClase("naranja");
    } else {
      setMensaje(`IMC: ${imc.toFixed(2)} - Nivel de obesidad`);
      setColorClase("rojo");
    }
  }

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <form onSubmit={calcularIMC}>
        <label htmlFor="peso">Peso en kg: </label>
        <input
          id ="peso"
          type="number"
          placeholder="Peso en kg"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="altura">Altura en metros: </label>
        <input
          id="altura"
          type="number"
          placeholder="Altura en metros"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <br /> <br />
        <button type="submit">Calcular</button>
      </form>
      {mensaje && <p className={colorClase}>{mensaje}</p>}
    </div>
  );
}