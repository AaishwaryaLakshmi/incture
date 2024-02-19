import React from 'react';
import './App.css';

const RestaurantCard = ({ restaurant, onClick }) => {
  return (
    <div className="restaurant-card" onClick={onClick}>
      <h2>{restaurant.name}</h2>
      <p>Address: {restaurant.address}</p>
    </div>
  );
};

export default RestaurantCard;
