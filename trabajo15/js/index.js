tareas = JSON.parse(localStorage.getItem('tareas') || []);

// Cargar tareas
window.onload = function() {
    mostrarTareas();
};

//Agregar Tareas
function agregarTarea() {
    const tareaInput = document.getElementById('tareaInput');
    const tarea = tareaInput.value;
    const error = document.getElementById('error');

    if (tarea === "") {
        alert("Debes ingresar texto para agregar la tarea.");
    } else {
        tareas.push({ nombre: tarea, completada: false }); 
        tareaInput.value = ""; 
        error.textContent = "";
        guardarTareas();
        mostrarTareas();
    }
}

//Uso de Enter
document.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        agregarTarea();
    }
});

//Borrar Tarea
function eliminarTarea(index) {
    tareas.splice(index, 1); 
    guardarTareas(); 
    mostrarTareas(); 
}

//Mostrart Tareas
function mostrarTareas() {
    const tareasContainer = document.getElementById('tareasContainer');
    tareasContainer.innerHTML = "";

    tareas.forEach((tarea, index) => {
        const tareaCard = document.createElement('div');
        tareaCard.className = "card mb-2";
        tareaCard.innerHTML = `
            <div class="card-body d-flex justify-content-between align-items-center">
                <div>
                    <input type="checkbox" id="checkbox${index}" onchange="toggleTarea(${index})" ${tarea.completada ? "checked" : ""}>
                    <label for="checkbox${index}" id="label${index}" class="${tarea.completada ? 'tarea-completa' : ''}">${tarea.nombre}</label>
                </div>
                <button class="btn btn-danger" onclick="eliminarTarea(${index})">Eliminar</button>
            </div>
        `;
        tareasContainer.appendChild(tareaCard);
    });
}

//Checbox y estilo
function toggleTarea(index) {
    const checkbox = document.getElementById(`checkbox${index}`);
    tareas[index].completada = checkbox.checked; 

    const label = document.getElementById(`label${index}`);
    
    if (checkbox.checked) {
        label.classList.add('tarea-completa');
    } else {
        label.classList.remove('tarea-completa');
    }
    
    guardarTareas(); 
}

//Guardar Tareas
function guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(tareas)); // Convierte el arreglo de tareas a JSON y lo guarda
}
