# Slack Profile Card

Welcome to the **Slack Profile Card** project! This project showcases a simple HTML page that displays user information, the current day of the week, and the current UTC time, all styled with CSS and dynamically updated using JavaScript.

## Table of Contents

- [Slack Profile Card](#slack-profile-card)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Technologies Used](#technologies-used)
  - [Setup and Installation](#setup-and-installation)
  - [Project Structure](#project-structure)
  - [Features](#features)
  - [Usage](#usage)
  - [License](#license)

## Project Overview

This project is a simple webpage that displays the following:
- A greeting message
- User's Slack display picture and username
- Current day of the week
- Current UTC time
- User's track
- A link to the user's GitHub profile

The page is designed to be responsive and visually appealing using modern web technologies.

## Technologies Used

- HTML
- CSS
- JavaScript
- Google Fonts

## Setup and Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Siddami/profile_card.git
    ```

2. Navigate to the project directory:
    ```bash
    cd yetunde-stage-one
    ```

3. Open the `index.html` file in your web browser:
    ```bash
    open index.html
    ```
    Or simply double-click the `index.html` file.

## Project Structure

The project consists of three main files:

1. **HTML** (`index.html`):
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <title>Slack Profile Card</title>
    </head>
    <body>
        <h1>Hello there!, welcome to my page</h1>
        <div id="wrapper">
            <div class="info1">
                <img src="./img/profile.jpeg" alt="Yetunde" data-testid="slackDisplayImage"/>
                <h2 data-testid="slackUserName">SidYetty</h2>
            </div>
            <div class="info2">
                <span data-testid="currentDayOfTheWeek">Monday</span>
                <span data-testid="currentUTCTime">1111</span>
                <p data-testid="myTrack">FrontEnd</p>
                <p>
                    <a href="https://github.com/Siddami" target="_blank" data-testid="myTrack">
                        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github"/>
                    </a>
                </p>
            </div>
        </div>
        <script src="index.js"></script>
    </body>
    </html>
    ```

2. **CSS** (`style.css`):
    ```css
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Roboto", sans-serif;
        text-align: center;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #wrapper {
        margin: 5px auto;
        padding: 5px;
        width: 320px;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
    }

    .info1, .info2 {
        padding: 8px;
        justify-self: center;
        align-self: center;
    }

    [data-testid="slackDisplayImage"] {
        max-width: 50%;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 3px 7px rgba(3, 1, 0, 0.1);
    }

    [data-testid="slackUserName"] {
        padding: 8px;
        color: rgb(22, 21, 21);
    }

    span {
        display: block;
        padding: 8px;
    }

    p {
        padding: 8px;
    }
    ```

3. **JavaScript** (`index.js`):
    ```javascript
    function dateAndTime() {
        const now = new Date();
        const dayOfTheWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
        const dayString = `Today is ${dayOfTheWeek}`;

        let hours = now.getUTCHours();
        hours < 10 ? hours = "0" + hours : hours; // condition one hours
        let minutes = now.getUTCMinutes();
        minutes < 10 ? minutes = "0" + minutes : minutes; // condition two minutes
        let seconds = now.getUTCSeconds();
        seconds < 10 ? seconds = "0" + seconds : seconds; // condition three seconds
        let milliseconds = now.getUTCMilliseconds();
        milliseconds < 1000 ? milliseconds = "0" + milliseconds : milliseconds; // condition four milliseconds

        const utcTime = `${hours}:${minutes}:${seconds}:${milliseconds} UTC`;

        document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayString;
        document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime;
    }

    setInterval(dateAndTime, 1);
    ```

## Features

- **Responsive Design**: The page is designed to be responsive and works well on different screen sizes.
- **Dynamic Content**: The current day of the week and UTC time are dynamically updated every second.
- **Stylish Layout**: The layout is styled using CSS with modern fonts and subtle shadows for a clean look.

## Usage

To use this project, simply follow the setup and installation instructions above. Once the project is running, you can see the dynamically updated day of the week and UTC time, along with other user information.

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as you see fit.
