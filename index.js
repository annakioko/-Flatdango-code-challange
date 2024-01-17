document.addEventListener('DOMContentLoaded', function () {
    fetch('https://my-json-server.typicode.com/martinwakaba/code-challenge-3/films')
        .then(response => response.json())
        .then(data => {
            populateMovieList(data.films);

            
            displayMovieDetails(data.films[0]);

            document.getElementById('buy-ticket-button').addEventListener('click', function () {
                buyTicket(data.films[0]);
            });
        })
        .catch(error => console.error('Error fetching movie data:', error));
});

function populateMovieList(films) {
    const filmsList = document.getElementById('films');

    const placeholderElement = document.getElementById('placeholder');
    if (placeholderElement) {
        filmsList.removeChild(placeholderElement);
    }

    
    films.forEach(film => {
        const listItem = document.createElement('li');
        listItem.textContent = film.title;
        listItem.classList.add('film', 'item');
        filmsList.appendChild(listItem);
        listItem.addEventListener('click', function () {
            displayMovieDetails(film);
        });
    });
}

function displayMovieDetails(movie) {
    document.getElementById('movie-image').src = movie.poster;
    document.getElementById('Movie-Title').textContent = movie.title;
    document.getElementById('movie-description').textContent = movie.description;
    document.getElementById('movie-runtime').querySelector('span').textContent = movie.runtime;
    document.getElementById('movie-showtime').querySelector('span').textContent = movie.showtime;
    const availableTickets = movie.capacity - movie.tickets_sold;
    document.getElementById('available-tickets').textContent = availableTickets;
}

function buyTicket(movie) {
    const availableTickets = movie.capacity - movie.tickets_sold;
    if (availableTickets > 0) {
        movie.tickets_sold += 1;
        displayMovieDetails(movie);
        alert('Ticket purchased successfully!');
    } else {
        alert('Sorry, no more tickets available.');
    }
}

