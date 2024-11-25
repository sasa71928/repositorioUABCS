document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById("product-list");
    if (!productContainer) {
        console.error("El contenedor 'product-list' no se encontró.");
        return;
    }

    fetch("https://oscaridsuabcs.infy.uk/conexion.php")
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                const productos = data.data;
                // Limpiar contenedor antes de añadir productos
                productContainer.innerHTML = "";

                productos.forEach(producto => {
                    const card = `
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="${producto.imagen_src}" class="card-img-top" alt="${producto.nombre}">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p class="card-text">${producto.caracteristicas}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <button type="button" class="btn btn-primary">Comprar</button>
                                        <small class="text-muted">$${producto.precio}</small>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                    productContainer.innerHTML += card;
                });
            } else {
                console.error("Error al obtener productos:", data.message);
            }
        })
        .catch(error => {
            console.error("Error al realizar la solicitud:", error);
        });
});

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');

    let currentIndex = 0;

    const updateCarousel = () => {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});
