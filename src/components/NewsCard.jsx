import React from 'react'

const NewsCard = ({news: {title, author, description, urlToImage,url, publishedAt}}) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="news-card"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="news-card">
        <img src={urlToImage ? urlToImage : "/no_p.jpeg"} alt={title}/>
        <div className="mt-4">
          <h3>{title}</h3>
          <div className="content">
            <div className="aut">
              <p>{author ? author : "Anonymous"}</p>
            </div>
            <div className="pb">
              <p>{publishedAt}</p>
            </div>
            <div className="des">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
    
  )
}

export default NewsCard
