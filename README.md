# WTWR (What to Wear?)

## About the Project

WTWR (What to Wear?) is a React application that helps users decide what clothing to wear based on the current weather.

The application retrieves current weather data from the OpenWeather API and displays clothing items that are appropriate for the current temperature.

## Features

- Displays the current date and location
- Retrieves current weather data from the OpenWeather API
- Displays the current temperature in Fahrenheit
- Filters clothing items based on the current weather
- Opens a garment preview when a clothing card is clicked
- Displays the garment name and weather type in the preview modal
- Opens and closes the Add Clothes modal
- Supports closing modals with the close button, Escape key, or by clicking the overlay

## Technologies Used

- React
- JavaScript
- HTML5
- CSS3
- Vite
- OpenWeather API
- React Hooks (`useState` and `useEffect`)
- CSS Grid
- Flexbox
- BEM methodology
- Git and GitHub

## Project Structure

The application is divided into reusable React components, including:

- `App`
- `Header`
- `Main`
- `WeatherCard`
- `ItemCard`
- `Footer`
- `ModalWithForm`
- `ItemModal`

Utility files are used for the default clothing data, weather API requests, and application constants.

## Weather Filtering

Clothing items are displayed according to the current temperature:

- **Hot:** 86°F or higher
- **Warm:** 66°F to 85°F
- **Cold:** below 66°F

The current temperature is retrieved from the OpenWeather API and used to determine which clothing cards should be displayed.

## GitHub Repository

https://github.com/hassanbaashi1/se_project_react

## Author

Hassan Abdullahi Ali
