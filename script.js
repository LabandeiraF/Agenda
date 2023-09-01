// Esperar a que el contenido del DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
    // Arreglo para almacenar los contactos
    let contactos = [];
  
    // Obtener referencias a elementos del DOM
    const nombreInput = document.getElementById("nombre");
    const telefonoInput = document.getElementById("telefono");
    const listaContactos = document.getElementById("lista-contactos");
  
    // Función para agregar un nuevo contacto
    function agregarContacto() {
      const nombre = nombreInput.value;
      const telefono = telefonoInput.value;
  
      if (nombre && telefono) {
        const nuevoContacto = { nombre, telefono };
        contactos.push(nuevoContacto);
  
        actualizarLista();
        guardarEnLocalStorage();
      }
  
      nombreInput.value = "";
      telefonoInput.value = "";
    }
  
    // Función para actualizar la lista en la página
    function actualizarLista() {
      listaContactos.innerHTML = "";
      contactos.forEach((contacto, index) => {
        const li = document.createElement("li");
        li.textContent = `${contacto.nombre}: ${contacto.telefono}`;
  
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => eliminar(index));
  
        li.appendChild(btnEliminar);
        listaContactos.appendChild(li);
      });
    }
  
   // Función para eliminar un contacto
function eliminar(index) {
  contactos.splice(index, 1);
  actualizarLista();
  guardarEnLocalStorage();
}

// Evento para agregar un nuevo contacto
document.getElementById("agregar").addEventListener("click", agregarContacto);
  
    // Cargar datos desde localStorage al cargar la página
    function cargarDesdeLocalStorage() {
      const contactosJSON = localStorage.getItem("contactos");
      if (contactosJSON) {
        contactos = JSON.parse(contactosJSON);
        actualizarLista();
      }
    }
  
    // Cargar datos desde localStorage al iniciar la página
    cargarDesdeLocalStorage();
  
    // Evento para agregar un nuevo contacto
    document.getElementById("agregar").addEventListener("click", agregarContacto);
  });
  