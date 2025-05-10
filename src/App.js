import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './components/NewsCard';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import mockData from './mockData';

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('general');
  
  // You can get a free API key from https://newsapi.org/
  const API_KEY = 'YOUR_API_KEY'; // Replace with your News API key
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        
        // Check if API key is set, otherwise use mock data
        if (API_KEY === 'YOUR_API_KEY') {
          // Using mock data since no API key is provided
          console.log('Using mock data. Please replace YOUR_API_KEY with a valid News API key for real data.');
          // Simulate API call delay
          setTimeout(() => {
            const filteredNews = mockData.articles.filter(article => 
              category === 'general' || article.category === category
            );
            setNews(filteredNews);
            setLoading(false);
          }, 500);
          return;
        }
        
        // Fetch real data from News API
        const response = await axios.get(API_URL);
        setNews(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
        console.error('Error fetching news:', err);
      }
    };
    
    fetchNews();
  }, [category, API_URL, API_KEY]);
  
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  
  return (
    <div className="app">
      <Header />
      <div className="container">
        <CategoryFilter 
          activeCategory={category} 
          onCategoryChange={handleCategoryChange} 
        />
        
        {loading && <div className="loading">Loading news...</div>}
        {error && <div className="error">{error}</div>}
        
        {!loading && !error && (
          <>
            {news.length === 0 ? (
              <div className="no-news">No news articles found.</div>
            ) : (
              <div className="news-container">
                {news.map((article, index) => (
                  <NewsCard key={index} article={article} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App; 