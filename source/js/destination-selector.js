document.addEventListener('DOMContentLoaded', function () {
    const customSelect = document.getElementById('destination-select');
    const customOptions = document.getElementById('destination-options');
    const destinationInput = document.getElementById('destination-input');

    customSelect.addEventListener('click', function () {
        customOptions.classList.toggle('hidden');
    });

    customOptions.querySelectorAll('a').forEach(option => {
        option.addEventListener('click', function (e) {
            e.preventDefault();
            const optionText = this.textContent.trim();
            customSelect.querySelector('span').textContent = optionText;
            destinationInput.value = optionText;
            customOptions.classList.add('hidden');
        });
    });

    document.addEventListener('click', function (e) {
        if (!customSelect.contains(e.target) && !customOptions.contains(e.target)) {
            customOptions.classList.add('hidden');
        }
    });

    customOptions.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            customOptions.classList.add('hidden');
        }
    });
});
