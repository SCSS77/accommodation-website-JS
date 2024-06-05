document.addEventListener('DOMContentLoaded', function () {
    const customSelect = document.querySelector('.app_destination-select');
    const customOptions = document.querySelector('.app_destination-options');

    customSelect.addEventListener('click', function () {
        customOptions.classList.toggle('hidden');
    });

    customOptions.querySelectorAll('.flex-1').forEach(option => {
        option.addEventListener('click', function (e) {
            e.preventDefault();
            const optionText = this.querySelector('span').textContent.trim();
            customSelect.querySelector('span').textContent = optionText;
            customOptions.classList.add('hidden');
        });
    });

    document.addEventListener('click', function (e) {
        if (!customSelect.contains(e.target) && !customOptions.contains(e.target)) {
            customOptions.classList.add('hidden');
        }
    });
});
