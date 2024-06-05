document.addEventListener('DOMContentLoaded', function() {
    const roomInfoToggle = document.getElementById('rooms-label');
    const roomDropdown = document.getElementById('rooms-options');
    const adultsCount = document.getElementById('rooms-adults-count');
    const childrenCount = document.getElementById('rooms-children-count');
    const roomsCount = document.getElementById('rooms-count');
    const roomInfo = document.getElementById('rooms-info');

    function closeDropdown(event) {
        if (!roomDropdown.contains(event.target) && event.target !== roomInfoToggle) {
            roomDropdown.classList.add('hidden');
        }
    }

    roomInfoToggle.addEventListener('click', function() {
        roomDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', closeDropdown);

    function updateRoomInfo() {
        roomInfo.textContent = `${adultsCount.textContent} Adultos · ${childrenCount.textContent} Niños · ${roomsCount.textContent} hab.`;

        localStorage.setItem('adults', adultsCount.textContent);
        localStorage.setItem('children', childrenCount.textContent);
        localStorage.setItem('rooms', roomsCount.textContent);
    }

    if(localStorage.getItem('adults')) {
        adultsCount.textContent = localStorage.getItem('adults');
    }
    if(localStorage.getItem('children')) {
        childrenCount.textContent = localStorage.getItem('children');
    }
    if(localStorage.getItem('rooms')) {
        roomsCount.textContent = localStorage.getItem('rooms');
    }

    document.querySelectorAll('.btn-increment, .btn-decrement').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const type = this.getAttribute('data-type');
            const countElement = type === 'adults' ? adultsCount : type === 'children' ? childrenCount : roomsCount;
            const increment = this.textContent === '+' ? 1 : -1;

            let newCount = parseInt(countElement.textContent) + increment;
            if (newCount < 0) {
                newCount = 0;
            }
            countElement.textContent = newCount;

            if (type !== 'rooms') {
                const decrementButton = this.parentElement.querySelector('.btn-decrement');
                decrementButton.disabled = newCount <= 0;
                if (newCount <= 0) {
                    decrementButton.classList.add('disabled');
                } else {
                    decrementButton.classList.remove('disabled');
                }
            }

            updateRoomInfo();
        });
    });
});
