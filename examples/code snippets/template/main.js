fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const eventsContainer = document.getElementById('events');
        data.allEvents.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.className = 'event';
            eventElement.innerHTML = `
                <h2>${event.id}</h2>
                <img src="${event.image}" alt="${event.name}">
                <p>${event.description}</p>
                <p><span class="bold">City:</span> ${event.city}</p>
            `;
            eventsContainer.appendChild(eventElement);
        });
    })
    .catch((error) => console.error('Error:', error));