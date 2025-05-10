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

3. Edit the API key in `src/App.js`:
   Replace `YOUR_API_KEY` with your actual News API key.

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

## License

This project is open source and available under the MIT License. 