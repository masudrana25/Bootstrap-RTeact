import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
  const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6717423a2ead4be2931b975448304ffa';

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
  }, []);
  return (
    <div>
      <h1> Top News : {articles.length}</h1>
      {
        articles.map(article => <News data ={article}></News>)
      }
    </div>
  );
};

export default TopHeadline;