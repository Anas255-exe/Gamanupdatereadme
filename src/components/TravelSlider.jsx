// TravelSlider.js
import React, { useState } from 'react';
import './../css/TravelSlider.css';
import Navbar from './../Navbar.jsx';
// import Footer from '../Footer.jsx';
const destinations = [
  {
    name: 'Rajasthan',
    image: 'https://images.pexels.com/photos/1588032/pexels-photo-1588032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Rajasthan, known as the "Land of Kings," is a vibrant and culturally rich state in northern India. It is renowned for its majestic forts, palaces, colorful festivals, and warm hospitality.',
  },
  {
    name: 'Kerala',
    image: 'https://images.pexels.com/photos/19743480/pexels-photo-19743480/free-photo-of-the-backwaters-of-kerala-refer-to-a-network-of-interconnected-lakes-rivers-canals-and-lagoons-that-run-parallel-to-the-arabian-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kerala is one of the prominent tourist destinations of India, with coconut-lined sandy beaches, backwaters, hill stations, Ayurvedic tourism and tropical greenery as its major attractions.',
  },
  {
    name: 'Andaman',
    image: 'https://images.pexels.com/photos/2403207/pexels-photo-2403207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A paradise for birds: Andaman is known as the paradise of birds, with 270 species of birds, including migratory and endemic birds.',
  },
  {
    name: 'Gujarat',
    image: 'https://images.pexels.com/photos/25809063/pexels-photo-25809063/free-photo-of-vivekananda-rock-memorial.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'The state of Gujarat boasts a vibrant art, architecture, culture, and heritage; all of which is quite evident in the day-to-day lives of the locals.',
  },
  {
    name: 'Hyderabad',
    image: 'https://images.pexels.com/photos/20380691/pexels-photo-20380691/free-photo-of-eureka-fort-statue-in-ramoji-film-city-in-hyderabad-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'It is a historic city noted for its many monuments, temples, mosques and bazaars. A multitude of influences have shaped the character of the city in the last 400 years.',
  },
  {
    name: 'Bihar',
    image: 'https://images.pexels.com/photos/6307227/pexels-photo-6307227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Bihar is a place full of history and spiritual significance. Located in the eastern part of India, this state is known as the land of monasteries.',
  },
];

const TravelSlider = () => {
  const [items, setItems] = useState(destinations);
  const [key, setKey] = useState(0); // Add this state

  const nextSlide = () => {
    const newItems = [...items];
    const firstItem = newItems.shift();
    newItems.push(firstItem);
    setItems(newItems);
    setKey(prevKey => prevKey + 1); // Update key
  };

  const prevSlide = () => {
    const newItems = [...items];
    const lastItem = newItems.pop();
    newItems.unshift(lastItem);
    setItems(newItems);
    setKey(prevKey => prevKey + 1); // Update key
  };

  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="slide" key={key}> {/* Add key here */}
          {items.map((item, index) => (
            <div
              className={`item item-${index + 1}`}
              style={{ backgroundImage: `url(${item.image})` }}
              key={index}
            >
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="des">{item.description}</div>
                <button className='see-more-button'>See More</button>
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