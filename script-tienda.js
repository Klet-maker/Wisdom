// Variables globales
let products = [
    {
        id: 1,
        title: "Trompeta Básica: Primeros Pasos",
        price: 29.99,
        level: "Principiante",
        pages: 120,
        description: "Guía completa para principiantes que desean aprender los fundamentos de la trompeta sin complicaciones.",
        image: "Trompeta-basica.jpg"
    },
    {
        id: 2,
        title: "Trompeta Intermedia: Perfecciona tu técnica",
        price: 39.99,
        level: "Intermedio",
        pages: 180,
        description: "Lleva tus habilidades al siguiente nivel con ejercicios avanzados y consejos profesionales.",
        image: "Trompeta-intermedio.jpg"
    },
    {
        id: 3,
        title: "Trompeta Avanzada: Dominio Total",
        price: 49.99,
        level: "Avanzado",
        pages: 250,
        description: "Conviértete en un experto con este completo manual para profesionales y entusiastas avanzados.",
        image: "Trompeta-avanzada.jpg"
    },
    {
        id: 4,
        title: "Ejercicios Diarios para Trompetistas",
        price: 24.99,
        level: "Todos",
        pages: 100,
        description: "Rutinas diarias para mantener y mejorar la técnica, adaptables a todos los niveles de experiencia.",
        image: "Ejercicios Diarios para Trompetistas.jpg"
    },
    {
        id: 5,
        title: "Jazz para Trompetistas Modernos",
        price: 44.99,
        level: "Intermedio-Avanzado",
        pages: 210,
        description: "Técnicas de improvisación, escalas y patrones para dominar el jazz contemporáneo con tu trompeta.",
        image: "Jazz para Trompetistas Modernos.jpg"
    },
    {
        id: 6,
        title: "Respiración y Postura para Trompetistas",
        price: 34.99,
        level: "Todos",
        pages: 150,
        description: "Guía especializada en técnicas de respiración y postura correcta para maximizar tu rendimiento.",
        image: "Respiración y Postura para Trompetistas.jpg"
    },
    // Productos adicionales para paginación
    {
        id: 7,
        title: "Historia de la Trompeta en el Jazz",
        price: 42.99,
        level: "Todos",
        pages: 220,
        description: "Un recorrido histórico por la evolución de la trompeta en el mundo del jazz y sus grandes intérpretes.",
        image: "Historia-trompeta-jazz.jpg"
    },
    {
        id: 8,
        title: "Mantenimiento y Cuidado de tu Trompeta",
        price: 19.99,
        level: "Todos",
        pages: 80,
        description: "Guía ilustrada con consejos prácticos para mantener tu instrumento en perfectas condiciones por años.",
        image: "Mantenimiento-trompeta.jpg"
    },
    {
        id: 9,
        title: "Trompeta para Niños: Método divertido",
        price: 32.99,
        level: "Principiante",
        pages: 100,
        description: "Método especialmente diseñado para niños y jóvenes que inician en el mundo de la trompeta.",
        image: "Trompeta-ninos.jpg"
    },
    {
        id: 10,
        title: "Repertorio Clásico para Trompeta",
        price: 46.99,
        level: "Intermedio-Avanzado",
        pages: 200,
        description: "Colección de partituras clásicas esenciales adaptadas para trompeta con comentarios interpretativos.",
        image: "Repertorio-clasico.jpg"
    },
    {
        id: 11,
        title: "Técnicas de Embocadura Avanzadas",
        price: 37.99,
        level: "Avanzado",
        pages: 160,
        description: "Desarrollo de una embocadura poderosa y flexible para trompetistas que buscan la excelencia.",
        image: "Tecnicas-embocadura.jpg"
    },
    {
        id: 12,
        title: "Trompeta Latina: Ritmos y Estilos",
        price: 39.99,
        level: "Intermedio",
        pages: 180,
        description: "Aprende los secretos de la trompeta en la música latina: salsa, merengue, cumbia y más.",
        image: "Trompeta-latina.jpg"
    }
];

// Configuración de paginación
const itemsPerPage = 6;
let currentPage = 1;
let filteredProducts = [...products];

// Función para inicializar el menú móvil
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('overlay');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            document.body.classList.toggle('mobile-menu-active');
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', function() {
            document.body.classList.remove('mobile-menu-active');
        });
    }
}

// Función para renderizar productos en la página
function renderProducts() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;
    
    // Calcular el índice de inicio y fin para la paginación
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // Obtener los productos para la página actual
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    // Limpiar el contenedor de productos
    productsGrid.innerHTML = '';
    
    // Generar HTML para cada producto
    paginatedProducts.forEach(product => {
        const productHTML = `
            <div class="product-card">
                <div class="product-img">
                    <img src="${product.image}" alt="${product.title}" style="height: 250px;"/>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <div class="product-meta">
                        <span>Nivel: ${product.level}</span>
                        <span>Páginas: ${product.pages}</span>
                    </div>
                    <p class="product-description">${product.description}</p>
                    <a href="#" class="btn">Añadir al carrito</a>
                </div>
            </div>
        `;
        productsGrid.innerHTML += productHTML;
    });
    
    // Actualizar la paginación
    updatePagination();
}

// Función para actualizar la paginación
function updatePagination() {
    const pagination = document.querySelector('.pagination');
    if (!pagination) return;
    
    // Calcular número total de páginas
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    // Limpiar la paginación actual
    pagination.innerHTML = '';
    
    // Generar controles de paginación
    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('a');
        pageItem.href = '#';
        pageItem.className = 'pagination-item' + (i === currentPage ? ' active' : '');
        pageItem.textContent = i;
        pageItem.addEventListener('click', function(e) {
            e.preventDefault();
            currentPage = i;
            renderProducts();
            // Desplazar hacia arriba para ver los nuevos productos
            document.querySelector('.products-container').scrollIntoView({behavior: 'smooth'});
        });
        pagination.appendChild(pageItem);
    }
    
    // Agregar botón "Siguiente" si hay más de una página
    if (totalPages > 1) {
        const nextButton = document.createElement('a');
        nextButton.href = '#';
        nextButton.className = 'pagination-item';
        nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                renderProducts();
                document.querySelector('.products-container').scrollIntoView({behavior: 'smooth'});
            }
        });
        pagination.appendChild(nextButton);
    }
}

// Función para aplicar filtros
function applyFilters() {
    const sortSelect = document.querySelector('.filter-group:first-child .filter-select');
    const levelSelect = document.querySelector('.filter-group:nth-child(2) .filter-select');
    const searchInput = document.querySelector('.search-input');
    
    // Obtener los valores de los filtros
    const sortValue = sortSelect ? sortSelect.value : null;
    const levelValue = levelSelect ? levelSelect.value : null;
    const searchValue = searchInput ? searchInput.value.toLowerCase() : '';
    
    // Filtrar por nivel
    if (levelValue && levelValue !== 'Todos los niveles') {
        filteredProducts = products.filter(product => {
            if (levelValue === 'Principiante') return product.level === 'Principiante';
            if (levelValue === 'Intermedio') return product.level === 'Intermedio' || product.level === 'Intermedio-Avanzado';
            if (levelValue === 'Avanzado') return product.level === 'Avanzado' || product.level === 'Intermedio-Avanzado';
            return true;
        });
    } else {
        filteredProducts = [...products];
    }
    
    // Filtrar por búsqueda
    if (searchValue) {
        filteredProducts = filteredProducts.filter(product => 
            product.title.toLowerCase().includes(searchValue) || 
            product.description.toLowerCase().includes(searchValue)
        );
    }
    
    // Ordenar productos
    if (sortValue) {
        switch (sortValue) {
            case 'Precio: menor a mayor':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'Precio: mayor a menor':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'Más nuevos':
                filteredProducts.sort((a, b) => b.id - a.id);
                break;
            case 'Más populares':
                // Para simular popularidad, usaremos una mezcla de precio y páginas
                filteredProducts.sort((a, b) => (b.price * b.pages) - (a.price * a.pages));
                break;
            default: // Destacados (por defecto)
                // Para simulación, ordenaremos por ID
                filteredProducts.sort((a, b) => a.id - b.id);
        }
    }
    
    // Resetear la página actual al aplicar filtros
    currentPage = 1;
    
    // Renderizar los productos filtrados
    renderProducts();
}

// Inicializar los controladores de eventos
function initEventListeners() {
    // Eventos para los filtros
    const sortSelect = document.querySelector('.filter-group:first-child .filter-select');
    const levelSelect = document.querySelector('.filter-group:nth-child(2) .filter-select');
    const searchForm = document.querySelector('.search-form');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', applyFilters);
    }
    
    if (levelSelect) {
        levelSelect.addEventListener('change', applyFilters);
    }
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            applyFilters();
        });
        
        // También aplicamos filtros al escribir después de un pequeño retraso
        const searchInput = searchForm.querySelector('.search-input');
        if (searchInput) {
            let typingTimer;
            searchInput.addEventListener('input', function() {
                clearTimeout(typingTimer);
                typingTimer = setTimeout(applyFilters, 500);
            });
        }
    }
    
    // Eventos para "Añadir al carrito"
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn') && e.target.textContent === 'Añadir al carrito') {
            e.preventDefault();
            
            // Obtener el título del producto desde el elemento padre
            const productCard = e.target.closest('.product-card');
            const productTitle = productCard ? productCard.querySelector('.product-title').textContent : '';
            
            // Mostrar confirmación
            alert(`"${productTitle}" ha sido añadido al carrito`);
        }
    });
}

// Función principal que se ejecutará cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar menú móvil
    initMobileMenu();
    
    // Renderizar productos iniciales
    renderProducts();
    
    // Inicializar controladores de eventos
    initEventListeners();
});