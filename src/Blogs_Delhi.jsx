import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';

export default function Blogs_Delhi() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:3001/blogs/search?location.city=delhi');
        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Navbar />
      <h1>Blogs for Delhi</h1>
      {blogs.length > 0 ? (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.title}> {/* Use title as key */}
              <Link to={`/blog/${encodeURIComponent(blog.title)}`}>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No blogs found for Delhi.</p>
      )}
    </div>
  );
}
