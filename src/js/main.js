// Archivo principal de JavaScript
console.log('🚀 TecnoloJs iniciado correctamente!');

// Función de inicialización
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOM cargado completamente');
    
    // Aquí irán las inicializaciones de componentes
    initializeNavigation();
    initializeCards();
});

// Función para navegación
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Navegando a:', link.getAttribute('href'));
        });
    });
}

// Función para cards
function initializeCards() {
    const cards = document.querySelectorAll('.news-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            console.log('Card clickeada');
        });
    });
}

// Exportar funciones para testing
export { initializeNavigation, initializeCards };