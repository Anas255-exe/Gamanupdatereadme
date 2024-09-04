import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar.jsx';

export default function Guides() {
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const response = await fetch('http://localhost:3001/guides/search_guides');
        if (!response.ok) {
          throw new Error('Failed to fetch guides data');
        }
        const data = await response.json();
        setGuides(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGuides();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Navbar />
      <h1>Guides</h1>
      {guides.length > 0 ? (
        <ul>
          {guides.map((guide) => (
            <li key={guide.name}> {/* Use name as key */}
              <Link to={`/guide/${encodeURIComponent(guide.name)}`}>
                <h2>{guide.name}</h2>
                <p>{guide.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No guides found.</p>
      )}
    </div>
  );
}
