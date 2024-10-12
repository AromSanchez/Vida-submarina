document.addEventListener("DOMContentLoaded", function() {
    // Función para cambiar la sección activa
    function changeSection(sectionId) {
        // Ocultar todas las secciones removiendo la clase 'active'
        const sections = document.querySelectorAll('.section-contenido');
        sections.forEach(section => section.classList.remove('active'));

        // Mostrar la sección seleccionada añadiendo la clase 'active'
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
        } else {
            console.error(`No se encontró el elemento con ID ${sectionId}`);
        }

        // Remover la clase 'active' de todos los botones
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.classList.remove('active'));

        // Añadir la clase 'active' al botón correspondiente
        const activeButton = document.getElementById(sectionId.replace('content-', ''));
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    // Al cargar la página, mostrar la primera sección
    changeSection('content-contaminacion');

    // Asignar los eventos de clic a los botones
    document.getElementById('contaminacion').addEventListener('click', function() {
        changeSection('content-contaminacion');
    });

    document.getElementById('calentamiento').addEventListener('click', function() {
        changeSection('content-calentamiento');
    });
    document.getElementById('sobrepesca').addEventListener('click', function() {
        changeSection('content-sobrepesca');
    });
    document.getElementById('acidificacion').addEventListener('click', function() {
        changeSection('content-acidificacion');
    });
});
