const btnCargar = document.getElementById("btncargar");
const listaTareas = document.getElementById("listadetareas");

btnCargar.addEventListener("click", async () => {
  listaTareas.innerHTML = ""; 

  const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!respuesta.ok) {
    listaTareas.innerHTML = `<li class="error">Error: ${respuesta.status}</li>`;

    return;
  }

  const tareas = await respuesta.json();

  const tareasCompletadas = tareas.filter(t => t.completed);

  tareasCompletadas.forEach(tarea => {
    const li = document.createElement("li");
    li.textContent = tarea.title;
    listaTareas.appendChild(li);
  });
});