fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const eventsContainer = document.getElementById('events');
        data.allEvents.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.className = 'card';
            eventElement.innerHTML = `
             <img width={600} height={400} src="${event.image}" alt="${event.name}">
             <h2>${event.id}</h2>
             <p>${event.description}</p>
             <p><span className="bold">City:</span> ${event.city}</p>
            `;
            eventsContainer.appendChild(eventElement);
        });
    })
    .catch((error) => console.error('Error:', error));