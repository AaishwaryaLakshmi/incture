import React, { useState } from 'react';
import RestaurantList from './RestaurantList';
import RestaurantInfo from './RestaurantInfo';
import { dummyRestaurants } from './Data'; // Import dummy data
import './App.css';

const Body = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div className="body">
      <RestaurantList restaurants={dummyRestaurants} onRestaurantClick={handleRestaurantClick} />
      {selectedRestaurant && <RestaurantInfo restaurant={selectedRestaurant} />}
    </div>
  );
};

export default Body;
