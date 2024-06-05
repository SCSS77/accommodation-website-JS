document.addEventListener('DOMContentLoaded', function () {
    const destinationContainer = document.querySelector('.app_destination-container');
    const destinationTrigger = document.querySelector('.app_destination-trigger');
    const destinationOptions = destinationTrigger.nextElementSibling;
    const options = destinationOptions.querySelectorAll('a');

    destinationTrigger.addEventListener('click', function () {
        destinationOptions.classList.toggle('hidden');
        destinationContainer.classList.toggle('strike-through');
    });

    options.forEach(option => {
        option.addEventListener('click', function (e) {
            e.preventDefault();
            destinationTrigger.textContent = this.textContent;
            destinationOptions.classList.add('hidden');
            destinationContainer.classList.remove('strike-through');
        });
    });

    document.addEventListener('click', function (e) {
        if (!destinationTrigger.contains(e.target) && !destinationOptions.contains(e.target)) {
            destinationOptions.classList.add('hidden');
            destinationContainer.classList.remove('strike-through');
        }
    });
});


