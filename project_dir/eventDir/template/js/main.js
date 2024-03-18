// Fetch the JSON data
fetch('./eventsData/data.json')
  .then(response => response.json())
  .then(data => {
    // Assuming parentElement is the DOM element you want to append to
    let parentElement = document.getElementById('category');

    data.allEvents.forEach(event => {
      let category = data.events_categories.find(cat => cat.id === event.category);
      if (category) {
        let newElement = document.createElement('div');
        newElement.textContent = `Event: ${event.title}, Category: ${category.title}`;
        parentElement.appendChild(newElement);
      }
    });
  })
  .catch(error => console.error('Error:', error));