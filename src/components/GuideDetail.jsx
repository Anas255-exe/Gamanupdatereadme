import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './../Navbar.jsx';
import './../css/GuideDetail.css'; // Import the CSS file

const images = [
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpR_mbwG8e2smECzOyo5PY39hkS4PTlCSXQ&s"
];

export default function GuideDetail() {
  const { name } = useParams();
  const [guide, setGuide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGuide = async () => {
      try {
        const response = await fetch(`http://localhost:3001/guides/search_guides?name=${encodeURIComponent(name)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch guide data');
        }
        const data = await response.json();
        setGuide(data.length > 0 ? data[0] : null);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGuide();
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Navbar />
      <div className='main-guide-div'>
        <div className="guide-detail-container">
          <div className="carousel-wrapper">
            {/* Replace with guide-specific images if available */}
            <Carousel images={images} interval={5000} />
          </div>

          <div className="guide-detail-page">
            {guide ? (
              <div className="guide-card">
                <header className="guide-header">
                  <h1 className="guide-title">{guide.name}</h1>
                  <div className="guide-meta">
                    <p className="guide-email">Email: {guide.email}</p>
                    <p className="guide-age">Age: {guide.age}</p>
                    <p className="guide-location">Location: {guide.location.city}, {guide.location.country}</p>
                    <p className="guide-contact">Contact: {guide.contact}</p>
                  </div>
                </header>

                <section className="guide-body">
                  <p className="guide-bio">{guide.bio}</p>
                </section>

                <section className="guide-expertise">
                  <h3 className="section-title">Expertise</h3>
                  <ul>
                    {guide.expertise.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                  </ul>
                </section>

                <section className="guide-languages">
                  <h3 className="section-title">Languages</h3>
                  <ul>
                    {guide.languages.map((lang, index) => (
                      <li key={index}>{lang}</li>
                    ))}
                  </ul>
                </section>

                <section className="guide-rating-cost">
                  <h3 className="section-title">Rating & Cost</h3>
                  <p className="guide-rating">Rating: {guide.rating} stars</p>
                  <p className="guide-cost">Price per Hour: ${guide.pricePerHour}</p>
                </section>

                <section className="guide-reviews">
                  <h3 className="section-title">Reviews</h3>
                  {guide.reviews.length > 0 ? (
                    guide.reviews.map((review, index) => (
                      <div key={index} className="review">
                        <p><strong>{review.username}</strong> on {new Date(review.date).toLocaleDateString()}</p>
                        <p>{review.comment}</p>
                      </div>
                    ))
                  ) : (
                    <p>No reviews yet.</p>
                  )}
                </section>
              </div>
            ) : (
              <p>No guide found for the specified name.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
