document.addEventListener('DOMContentLoaded', function() {
    const roomInfoToggle = document.querySelector('.app_rooms-label');
    const roomDropdown = document.querySelector('.app_rooms-options');
    const adultsCount = document.querySelector('.app_rooms-adults-count');
    const childrenCount = document.querySelector('.app_rooms-children-count');
    const roomsCount = document.querySelector('.app_rooms-count');

    function closeDropdown(event) {
        if (!roomDropdown.contains(event.target) && event.target !== roomInfoToggle) {
            roomDropdown.classList.add('hidden');
        }
    }

    if (roomInfoToggle && roomDropdown) {
        roomInfoToggle.addEventListener('click', function() {
            roomDropdown.classList.toggle('hidden');
        });

        document.addEventListener('click', closeDropdown);
    }

    function updateRoomInfo() {
        if (roomInfoToggle && adultsCount && childrenCount && roomsCount) {
            roomInfoToggle.textContent = `${adultsCount.textContent} Adultos · ${childrenCount.textContent} Niños · ${roomsCount.textContent} Habitaciones`;

            localStorage.setItem('adults', adultsCount.textContent);
            localStorage.setItem('children', childrenCount.textContent);
            localStorage.setItem('rooms', roomsCount.textContent);
            localStorage.setItem('roomInfo', roomInfoToggle.textContent);
        } else {
            console.error('One or more necessary elements not found in the DOM');
        }
    }

    if (localStorage.getItem('adults')) {
        adultsCount.textContent = localStorage.getItem('adults');
    }
    if (localStorage.getItem('children')) {
        childrenCount.textContent = localStorage.getItem('children');
    }
    if (localStorage.getItem('rooms')) {
        roomsCount.textContent = localStorage.getItem('rooms');
    }
    if (localStorage.getItem('roomInfo')) {
        roomInfoToggle.textContent = localStorage.getItem('roomInfo');
    } else {
        updateRoomInfo();
    }

    document.querySelectorAll('.app_btn-increment, .app_btn-decrement').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const type = this.getAttribute('data-type');
            const countElement = type === 'adults' ? adultsCount : type === 'children' ? childrenCount : roomsCount;
            const increment = this.textContent === '+' ? 1 : -1;

            if (countElement) {
                let newCount = parseInt(countElement.textContent) + increment;
                if (newCount < 0) {
                    newCount = 0;
                }
                countElement.textContent = newCount;

                if (type !== 'rooms') {
                    const decrementButton = this.parentElement.querySelector('.app_btn-decrement');
                    decrementButton.disabled = newCount <= 0;
                    if (newCount <= 0) {
                        decrementButton.classList.add('disabled');
                    } else {
                        decrementButton.classList.remove('disabled');
                    }
                }

                updateRoomInfo();
            } else {
                console.error('Count element not found in the DOM');
            }
        });
    });
});
