import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './../Navbar.jsx';
import './../css/BlogDetail.css'; // Import the CSS file

export default function BlogDetail() {
  const { title } = useParams(); 
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:3001/blogs/search?title=${encodeURIComponent(title)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }
        const data = await response.json();
        setBlog(data.length > 0 ? data[0] : null);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [title]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <Navbar />
    <div className="blog-detail-page">
      
      {blog ? (
        <div className="blog-card">
          <header className="blog-header">
            <h1 className="blog-title">{blog.title}</h1>
            <div className="blog-meta">
              {blog.author ? (
                <p className="author">By {blog.author.name} ({blog.author.email})</p>
              ) : (
                <p className="author">Author Unknown</p>
              )}
              <p className="date">Published on: {new Date(blog.blogDate).toLocaleDateString()}</p>
              <p className="date">Travel Date: {new Date(blog.travelDate).toLocaleDateString()}</p>
            </div>
          </header>

          <section className="blog-body">
            <p className="blog-description">{blog.description}</p>
          </section>

          <section className="blog-location">
            <h3 className="section-title">Location</h3>
            <p>Country: {blog.location.country}</p>
            <p>City: {blog.location.city}</p>
            <p>Coordinates: {blog.location.coordinates.latitude}, {blog.location.coordinates.longitude}</p>
          </section>

          <section className="blog-images">
            <h3 className="section-title">Gallery</h3>
            <div className="image-grid">
              {blog.images.map((image, index) => (
                <img key={index} src={image} alt={`Blog image ${index + 1}`} className="blog-image" />
              ))}
            </div>
          </section>

          <section className="blog-rating-cost">
            <h3 className="section-title">Rating & Cost</h3>
            <p className="blog-rating">Rating: {blog.rating} stars</p>
            <p className="blog-cost">Cost: ${blog.cost}</p>
          </section>

          <section className="blog-tags">
            <h3 className="section-title">Tags</h3>
            <ul className="tags-list">
              {blog.tags.map((tag, index) => (
                <li key={index} className="tag">{tag}</li>
              ))}
            </ul>
          </section>

          <section className="blog-comments">
            <h3 className="section-title">Comments</h3>
            {blog.comments.length > 0 ? (
              blog.comments.map((comment) => (
                <div key={comment._id.$oid} className="comment">
                  <p><strong>{comment.username}</strong> on {new Date(comment.date.$date).toLocaleDateString()}</p>
                  <p>{comment.text}</p>
                </div>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </section>
        </div>
      ) : (
        <p>No blog found for the specified title.</p>
      )}
    </div>
    </>
  );
}
