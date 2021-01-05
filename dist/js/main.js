(function() {

    // menu
    const responsiveMenu = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    // Event listeners
    document.addEventListener('DOMContentLoaded', () => {
        
        // menu
        responsiveMenu.addEventListener('click', () => menu.classList.toggle('menu-activo') );
        
        menu.addEventListener('click', event => {
            
            removerMenu(event);

        });
    })


    // funciones
    function removerMenu(event){
        if( event.target.classList.contains('menu-item') || event.target.classList.contains('icon') && menu.classList.contains('menu-activo') ){
            menu.classList.remove('menu-activo');
        }
    }

})();
