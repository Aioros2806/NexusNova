document.addEventListener('DOMContentLoaded', () => {
    console.log('Script cargado correctamente para el equipo.');
    
    // Ejemplo de interactividad simple
    const teamHeader = document.querySelector('h1');
    teamHeader.addEventListener('click', () => {
        alert('¡Bienvenido a la página del equipo!');
    });
});