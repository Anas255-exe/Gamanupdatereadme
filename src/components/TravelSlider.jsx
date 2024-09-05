// TravelSlider.js
import React, { useState } from 'react';
import './../css/TravelSlider.css';
import Navbar from './../Navbar.jsx';
import Footer from '../Footer.jsx';
const destinations = [
  {
    name: 'Switzerland',
    image: 'https://i.ibb.co/qCkd9jS/img1.jpg',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
  },
  {
    name: 'Finland',
    image: 'https://i.ibb.co/jrRb11q/img2.jpg',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
  },
  {
    name: 'Iceland',
    image: 'https://i.ibb.co/NSwVv8D/img3.jpg',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
  },
  {
    name: 'Australia',
    image: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
  },
  {
    name: 'Netherlands',
    image: 'https://i.ibb.co/jTQfmTq/img5.jpg',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
  },
  {
    name: 'Ireland',
    image: 'https://i.ibb.co/RNkk6L0/img6.jpg',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
  },
];

const TravelSlider = () => {
  const [items, setItems] = useState(destinations);

  const nextSlide = () => {
    const newItems = [...items];
    const firstItem = newItems.shift();
    newItems.push(firstItem);
    setItems(newItems);
  };

  const prevSlide = () => {
    const newItems = [...items];
    const lastItem = newItems.pop();
    newItems.unshift(lastItem);
    setItems(newItems);
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="slide">
        {items.map((item, index) => (
          <div
            className={`item item-${index + 1}`}
            style={{ backgroundImage: `url(${item.image})` }}
            key={index}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.description}</div>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev" onClick={prevSlide}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={nextSlide}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      {/* <Footer/> */}
    </div>
    
    </>
  );
};

export default TravelSlider;
