document.addEventListener('DOMContentLoaded', function () {
    const projectImages = document.querySelectorAll('img[data-id]');

    projectImages.forEach(image => {
        image.addEventListener('click', function () {
            const projectPage = this.getAttribute('data-id');
            window.location.href = projectPage; // Redirige a la página del proyecto
        });
    });
});
