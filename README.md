FLATDANGO MOVIES Web App

Overview

FLATDANGO MOVIES is a simple web application that shows a list of movies and their details. The app ensures everything is ready before displaying the movie information. Users can click on a movie to see more details, and if there are available tickets, they can buy them.

Code Explaination

DOMContentLoaded Event
The app waits for the DOM to fully load before doing anything. This ensures that we don't run into issues trying to change things in the web page before it's fully set up.

API Endpoint
The `apiEndpoint` variable holds the URL where the app gets its movie data. 

fetchMovieData Function

This function uses the Fetch API to ask the server for movie data from the specified endpoint. If everything goes well, it gets the data; otherwise, it logs an error.

Display Functions
The display functions fill the movie list and set up clickable items. When you click a movie, the app shows the movie details.

Load Event Listener
This event listener waits for everything (images, scripts, etc.) to finish loading before trying to fetch and show movie data.

Usage

1. Open the app in your web browser.
2. If tickets are available, click "Buy Ticket" to purchase one. The available ticket count decreases, and you'll get an alert if the showing is sold out.

Troubleshooting

If something isn't working:

1. Check the API endpoint (in `apiEndpoint`) to make sure it's correct and accessible.
2. Confirm that the movie data follows the expected format.
3. Make sure your development environment is set up correctly, and the server is running.







