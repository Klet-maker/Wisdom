        // Función para manejar el menú móvil
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('nav-links');
            const overlay = document.getElementById('overlay');
            
            // Función para abrir/cerrar el menú
            function toggleMenu() {
                document.body.classList.toggle('mobile-menu-active');
            }
            
            // Event listeners
            hamburger.addEventListener('click', toggleMenu);
            overlay.addEventListener('click', toggleMenu);
            
            // Cerrar el menú al hacer clic en un enlace
            const navItems = document.querySelectorAll('.nav-links a');
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    if (document.body.classList.contains('mobile-menu-active')) {
                        toggleMenu();
                    }
                });
            });
            
            // Cerrar el menú cuando la ventana se redimensione a un tamaño mayor
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && document.body.classList.contains('mobile-menu-active')) {
                    document.body.classList.remove('mobile-menu-active');
                }
            });
        });