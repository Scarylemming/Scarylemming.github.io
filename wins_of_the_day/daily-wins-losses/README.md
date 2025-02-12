# Daily Wins and Losses

This project is a simple web application that allows users to record their daily wins and losses. Each entry is stored in a JSON file with the date and type of action, and users can retrieve all records for a given day.

## Project Structure

```
daily-wins-losses
├── src
│   ├── css
│   │   └── styles.css        # Styles for the HTML pages
│   ├── js
│   │   └── app.js            # JavaScript for handling form submissions and UI updates
│   ├── pages
│   │   └── index.html        # Main HTML page with the form for input
│   └── data
│       └── records.json      # JSON file storing daily records
├── server
│   ├── server.js             # Entry point for the server application
│   └── routes
│       └── records.js        # Routes for handling win and loss records
├── package.json               # npm configuration file
├── .gitignore                 # Files and directories to ignore by Git
└── README.md                  # Project documentation
```

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Start the server with `node server/server.js`.
5. Open your browser and go to `http://localhost:3000` to access the application.

## Usage

- Use the form on the main page to input your daily wins and losses.
- Each entry will be saved with the current date.
- You can retrieve records for a specific date through the provided API endpoints.

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements or new features.