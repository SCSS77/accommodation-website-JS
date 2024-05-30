document.addEventListener('DOMContentLoaded', function () {
    const destinationInput = document.querySelector('.destination-selector input');
    destinationInput.addEventListener('focus', function () {
    });

    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = searchForm.querySelector('input').value;
        alert('Buscando: ' + query);
    });
});
