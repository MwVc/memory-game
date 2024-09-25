# Memory Card Game

This project is part of [The Odin Project](https://www.theodinproject.com/)'s curriculum. The Memory Card Game is built using **React** and demonstrates the use of **useState** and **useEffect** hooks to manage game state and asynchronous data fetching.

## Overview

The goal of the game is to click on a card without selecting the same card twice. Each time a card is clicked, the deck is shuffled. If a card is clicked twice, the game resets the score. The game also keeps track of the highest score achieved in the current session.

## Features

- Fetches card data using the GIPHY API.
- Uses React hooks for state management:
  - `useState`: To handle game state like score, high score, and card data.
  - `useEffect`: To fetch data asynchronously when the component mounts.
- Implements card shuffle logic to rearrange the cards after each valid click.
- Reset functionality when a card is clicked twice.
- Simple loading indicator when card data is being fetched.
- Responsive design using Flexbox.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **JavaScript (ES6+)**: For component logic and state management.
- **GIPHY API**: To fetch trending GIFs for use as card data.
- **CSS**: Styling and animations.
- **PropTypes**: To validate component props.

## Key Concepts

- **State Management**: The app maintains game state with React's `useState`. The state keeps track of the current score, high score, and which cards have been clicked.
- **Effect Hook**: The `useEffect` hook is used to fetch data from the GIPHY API when the component first renders, ensuring that the game has card data to display.
- **Shuffle Algorithm**: After each valid click, the array of cards is shuffled using a utility function to ensure that the cards are always rearranged.

## Future Enhancements

- Add more complex levels of difficulty.
- Display additional feedback for incorrect selections.
- Improve styling for better UX and design.

## Credits

- [GIPHY API](https://developers.giphy.com/) for providing GIFs.
- [The Odin Project](https://www.theodinproject.com/) for the course outline and guidance.
