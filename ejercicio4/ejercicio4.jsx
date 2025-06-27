function App() {
  const [botonHabilitado, setBotonHabilitado] = React.useState("izquierdo");

  return (
    <div>
      <button
        disabled={botonHabilitado !== "izquierdo"}
        onClick={() => setBotonHabilitado("derecho")}
      >
        Izquierdo
      </button>

      <button
        disabled={botonHabilitado !== "derecho"}
        onClick={() => setBotonHabilitado("izquierdo")}
      >
        Derecho
      </button>
    </div>
  );
}