import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faPlay, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faMedium } from '@fortawesome/free-brands-svg-icons';
import CachedImage from './CachedImage';
import './Blog.css';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mtalhaofc');
        const data = await response.json();
        setArticles(data.items.slice(0, 3));
      } catch (error) {
        console.log('Medium fetch error:', error);
      }
    };

    const fetchYouTubeVideos = async () => {
      try {
        // Using YouTube RSS feed (no API key needed)
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=UCGn5VHJUPpWsjCIZFZGfLYw');
        const data = await response.json();
        
        // Extract video data from RSS
        const videoData = data.items.slice(0, 3).map(item => ({
          id: item.guid.split(':')[2],
          title: item.title,
          thumbnail: `https://img.youtube.com/vi/${item.guid.split(':')[2]}/maxresdefault.jpg`,
          link: item.link
        }));
        
        setVideos(videoData);
      } catch (error) {
        console.log('YouTube fetch error:', error);
        // Fallback to static data
        const staticVideos = [
          {
            id: '1',
            title: 'Loading YouTube videos...',
            thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
            link: 'https://youtube.com/@mtalhaofc'
          }
        ];
        setVideos(staticVideos);
      }
    };

    Promise.all([fetchMediumArticles(), fetchYouTubeVideos()]).finally(() => {
      setLoading(false);
    });
  }, []);

  const extractImageFromContent = (content) => {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = content.match(imgRegex);
    return match ? match[1] : null;
  };

  const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  if (loading) {
    return (
      <section id="blog" className="blog-section">
        <div className="container">
          <h2 className="section-title">Loading Content...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Latest Content
        </motion.h2>

        {/* Medium Articles */}
        <motion.div 
          className="content-category"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="category-title">
            <FontAwesomeIcon icon={faMedium} className="category-icon" />
            Medium Articles
          </h3>
          <div className="content-grid">
            {articles.map((article, index) => {
              const thumbnail = article.thumbnail || extractImageFromContent(article.content);
              return (
                <motion.div
                  key={article.guid}
                  className="content-card article-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {thumbnail && (
                    <div className="article-thumbnail">
                      <CachedImage 
                        src={thumbnail} 
                        alt={article.title}
                        className="thumbnail-image"
                      />
                    </div>
                  )}
                  <div className="article-content">
                    <h4 className="content-title">{article.title}</h4>
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="content-link"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      Read More
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* YouTube Videos */}
        <motion.div 
          className="content-category"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="category-title">
            <FontAwesomeIcon icon={faYoutube} className="category-icon youtube" />
            YouTube Videos
          </h3>
          <div className={`content-grid ${videos.length === 1 ? 'single-item' : ''}`}>
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className="content-card video-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="video-thumbnail">
                  <CachedImage 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="thumbnail-image"
                  />
                  <div className="play-overlay">
                    <FontAwesomeIcon icon={faPlay} className="play-icon" />
                  </div>
                </div>
                <div className="video-content">
                  <h4 className="content-title">{video.title}</h4>
                  <a 
                    href={video.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="content-link video-link"
                  >
                    <FontAwesomeIcon icon={faPlay} />
                    Watch Video
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
