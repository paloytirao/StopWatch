# StopWatch


# Digital Stopwatch

A clean, modern digital stopwatch built with HTML, CSS, and JavaScript, matching the provided UI design but in dark mode. It includes milliseconds in the display and features start, pause/resume, and reset buttons with dynamic disabling for intuitive use.

## Demo

You can try the stopwatch by opening `index.html` in your web browser.

## Features

- **Start Timing**: Begin the stopwatch with the 'Start' button (disabled once started).
- **Pause/Resume**: Temporarily stop and resume with the 'Pause' button (toggles to 'Resume'; enabled only when running or paused).
- **Reset**: Clear the timer with the 'Reset' button (enabled only when started or paused).
- **Real-Time Display**: Shows elapsed time in HH : MM : SS : MMM format, updating every 10ms for smooth milliseconds.
- **Button States**: Buttons are dynamically enabled/disabled: Start can't be pressed again after starting; Pause and Reset are disabled initially.
- **Dark Mode UI**: Dark background with accented blue text and colored buttons (dark blue for Pause, red for Start, green for Reset).
- **UI Container**: Added a dedicated container for the entire UI with rounded corners and shadow.
- **Responsive Design**: Adapts to different screen sizes, including mobile devices.
- **Smooth Interactions**: Button hover and active effects.

## Installation

1. Clone or download the repository.
2. Open `index.html` in any modern web browser (e.g., Chrome, Firefox, Safari).

No additional dependencies or setup required – it's pure vanilla JavaScript!

## Usage

- Click 'Start' to begin timing (button disables after press).
- Click 'Pause' to stop temporarily (changes to 'Resume'; Reset enables).
- Click 'Resume' to continue.
- Click 'Reset' to stop and reset to 00 : 00 : 00 : 000 (enables Start, disables others).

The display updates in real-time while running.

## Technologies Used

- **HTML5**: Structure of the stopwatch interface.
- **CSS3**: Styling for the dark mode UI design and responsive layout.
- **JavaScript (ES6)**: Logic for timing, event handling, and DOM updates.

## Project Structure

- `index.html`: Main HTML file containing the stopwatch layout.
- `script.js`: JavaScript code for stopwatch functionality.
- `style.css`: CSS styles for the dark mode UI design and interactions.

## Limitations

- No support for lap times or split timing.
- No keyboard shortcuts.
- Basic functionality; does not persist time across page reloads.

## License

This project is open-source and available under the MIT License. Feel free to use, modify, or distribute it.
