// ===============================
// Planificador de Tareas - app.js
// Validación del formulario de nueva tarea
// ===============================

// Elementos principales del DOM
const newTaskModalElement = document.querySelector('#newTaskModal');
const newTaskForm = document.querySelector('#newTaskForm');
const formAlert = document.querySelector('#formAlert');

// Instancia del modal de Bootstrap (para poder cerrarlo desde JavaScript)
const newTaskModal = new bootstrap.Modal(newTaskModalElement);

/**
 * Valida los datos del formulario.
 * @param {{name: string, description: string, dueDate: string, status: string}} data
 * @returns {string[]} Lista de mensajes de error (vacía si todo es válido)
 */
function validFormFieldInput(data) {
    const errors = [];

    if (data.name.trim() === '') {
        errors.push('El nombre no puede estar vacío.');
    }

    if (data.description.trim() === '') {
        errors.push('La descripción no puede estar vacía.');
    }

    if (data.dueDate === '') {
        errors.push('Debes seleccionar una fecha de entrega.');
    }

    if (data.status === '') {
        errors.push('Debes seleccionar un estado.');
    }

    return errors;
}

// Muestra la alerta con los mensajes de error
function showError(errors) {
    formAlert.innerHTML = errors.join('<br>');
    formAlert.classList.remove('d-none');
}

// Oculta la alerta
function hideError() {
    formAlert.classList.add('d-none');
    formAlert.innerHTML = '';
}

// Se ejecuta cuando el usuario envía el formulario
newTaskForm.addEventListener('submit', function (event) {
    // Evita que la página se recargue
    event.preventDefault();

    // Seleccionar los campos por su id
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescriptionInput = document.querySelector('#newTaskDescriptionInput');
    const newTaskDueDateInput = document.querySelector('#newTaskDueDateInput');
    const newTaskStatusSelect = document.querySelector('#newTaskStatusSelect');

    // Recuperar los valores ingresados
    const data = {
        name: newTaskNameInput.value,
        description: newTaskDescriptionInput.value,
        dueDate: newTaskDueDateInput.value,
        status: newTaskStatusSelect.value
    };

    // Comprobar en consola que los datos se recuperan bien
    console.log('name: ' + data.name);
    console.log('description: ' + data.description);
    console.log('dueDate: ' + data.dueDate);
    console.log('status: ' + data.status);

    // Validar
    const errors = validFormFieldInput(data);

    if (errors.length > 0) {
        // Datos inválidos: mostrar la alerta y dejar el modal abierto
        showError(errors);
    } else {
        // Datos válidos: ocultar la alerta y cerrar el modal
        hideError();
        console.log('Formulario válido:', data);
        // En sprints siguientes aquí se creará la tarjeta de la nueva tarea
        newTaskModal.hide();
    }
});

// Al cerrar el modal: limpiar el formulario y ocultar la alerta
newTaskModalElement.addEventListener('hidden.bs.modal', function () {
    newTaskForm.reset();
    hideError();
});