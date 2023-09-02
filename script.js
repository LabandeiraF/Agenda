
document.addEventListener("DOMContentLoaded", function () {
    // Arreglo para almacenar los contactos
    let contactos = [];
  
   
    const nombreInput = document.getElementById("nombre");
    const telefonoInput = document.getElementById("telefono");
    const listaContactos = document.getElementById("lista-contactos");
  
    
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
  
   
function eliminar(index) {
  contactos.splice(index, 1);
  actualizarLista();
  guardarEnLocalStorage();
}


document.getElementById("agregar").addEventListener("click", agregarContacto);
  
    
    function cargarDesdeLocalStorage() {
      const contactosJSON = localStorage.getItem("contactos");
      if (contactosJSON) {
        contactos = JSON.parse(contactosJSON);
        actualizarLista();
      }
    }
  
  
    cargarDesdeLocalStorage();
  
    document.getElementById("agregar").addEventListener("click", agregarContacto);
  });
  