// Fetch the JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Assuming parentElement is the DOM element you want to append to
    let parentElement = document.getElementById('parentElementId');

    data.allEvents.forEach(event => {
      let category = data.events_categories.find(category => category.id === event.city);
      if (category) {
        let newElement = document.createElement('div');
        newElement.textContent = `Event: ${event.title}, City: ${category.title}`;
        parentElement.appendChild(newElement);
      }
    });
  })
  .catch(error => console.error('Error:', error));