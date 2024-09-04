import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './../Navbar.jsx';

export default function BlogDetail() {
  const { title } = useParams(); // Get the blog title from the URL
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
        if (Array.isArray(data) && data.length > 0) {
          setBlog(data[0]); // Assume the first blog is the one we want
        } else {
          setBlog(data);
        }
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
    <div>
      <Navbar />
      {blog ? (
        <div>
          <h1>{blog.title}</h1>
          <div className="ByAndDate">
            {blog.author ? <h2>By {blog.author.name} ({blog.author.email})</h2> : <h2>Author Unknown</h2>}
            <h2>Blog Date: {new Date(blog.blogDate).toLocaleDateString()}</h2>
            <h2>Travel Date: {new Date(blog.travelDate).toLocaleDateString()}</h2>
          </div>
          <p>{blog.description}</p>

          <h3>Location</h3>
          <p>Country: {blog.location.country}</p>
          <p>City: {blog.location.city}</p>
          <p>Coordinates: {blog.location.coordinates.latitude}, {blog.location.coordinates.longitude}</p>

          <h3>Images</h3>
          {blog.images.map((image, index) => (
            <img key={index} src={image} alt={`Blog image ${index + 1}`} style={{ width: '300px', margin: '10px' }} />
          ))}

          <h3>Rating</h3>
          <p>{blog.rating} stars</p>

          <h3>Cost</h3>
          <p>${blog.cost}</p>

          <h3>Tags</h3>
          <ul>
            {blog.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>

          <h3>Comments</h3>
          {blog.comments.length > 0 ? (
            blog.comments.map((comment) => (
              <div key={comment._id.$oid}>
                <p><strong>{comment.username}</strong> on {new Date(comment.date.$date).toLocaleDateString()}</p>
                <p>{comment.text}</p>
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      ) : (
        <p>No blog found for the specified title.</p>
      )}
    </div>
  );
}
