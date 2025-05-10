import React from 'react';

const NewsCard = ({ article }) => {
  const {
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source
  } = article;

  const defaultImage = 'https://via.placeholder.com/300x200?text=No+Image+Available';
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="news-card">
      <img 
        className="news-image" 
        src={urlToImage || defaultImage} 
        alt={title}
        onError={(e) => {
          e.target.src = defaultImage;
        }}
      />
      <div className="news-content">
        <h3 className="news-title">{title}</h3>
        <p className="news-description">
          {description ? description.slice(0, 100) + '...' : 'No description available'}
        </p>
        <div className="news-source">
          <span>{source.name}</span>
          <span>{formatDate(publishedAt)}</span>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="news-link">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard; 