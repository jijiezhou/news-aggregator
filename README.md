# News Aggregator

A simple news aggregator application that fetches and displays news articles from various sources. Built with React and the News API.

## Features

- Fetch news articles from News API
- Display news articles in a responsive grid layout
- Filter news by category
- Read more functionality to view full articles

## Getting Started

### Prerequisites

- Node.js (v12 or later)
- npm or yarn
- News API key (sign up at [newsapi.org](https://newsapi.org))

### Installation

1. Clone this repository:
   ```
   git clone <repository-url>
   cd news-aggregator
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your API key:
   - Create a `.env` file in the root of your project
   - Add your News API key as follows:
   ```
   REACT_APP_NEWS_API_KEY=your_actual_api_key_here
   ```
   - This file is included in .gitignore and will not be pushed to GitHub

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## API Information

This app uses the [News API](https://newsapi.org) which has the following limitations for the free tier:
- 100 requests per day
- Only works in development mode (localhost) for the free plan
- For production deployment, you'll need a paid plan

## Security Best Practices

- Never commit your API keys to GitHub
- Always use environment variables for sensitive information
- The `.env` file is added to .gitignore to prevent it from being committed

## License

This project is open source and available under the MIT License. 