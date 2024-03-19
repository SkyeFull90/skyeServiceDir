fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const eventsContainer = document.getElementById('events');
        data.allEvents.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.className = 'home_body';
            eventElement.innerHTML = `
                <section className="card">
                    <div className="image">
                        <img width={600} height={400} src="${event.image}" alt="${event.name}">
                    </div>
                    <div className="content">
                        <h2>${event.id}</h2>
                        <p>${event.description}</p>
                        <p><span className="bold">City:</span> ${event.city}</p>
                    </div>
                </section>
            `;
            eventsContainer.appendChild(eventElement);
        });
    })
    .catch((error) => console.error('Error:', error));