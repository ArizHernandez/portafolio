(function() {

    // menu
    const responsiveMenu = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    // Proyectos
    const proyecto1 = document.querySelector('#proyecto1');
    const proyecto2 = document.querySelector('#proyecto2');
    const proyecto3 = document.querySelector('#proyecto3');


    // Event listeners
    document.addEventListener('DOMContentLoaded', () => {
        
        // menu
        responsiveMenu.addEventListener('click', () => menu.classList.toggle('menu-activo') );
        
        menu.addEventListener('click', event => {
            
            removerMenu(event);

        } );

        // Proyectos
        proyecto1.addEventListener('click', () => window.location.href = 'https://github.com/ArizHernandez/P-gina-Restaurante' );
        proyecto2.addEventListener('click', () => window.location.href = 'https://github.com/ArizHernandez/MacroPeliculas' );
        proyecto3.addEventListener('click', () => window.location.href = 'https://github.com/ArizHernandez/SpotiApp' );

    })


    // funciones
    function removerMenu(event){
        if( event.target.classList.contains('menu-item') || event.target.classList.contains('icon') && menu.classList.contains('menu-activo') ){
            menu.classList.remove('menu-activo');
        }
    }

})();
