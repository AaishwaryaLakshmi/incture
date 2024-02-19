import React from 'react';
import RestaurantCard from './RestaurantCard';
import './App.css';

const RestaurantList = ({ restaurants, onRestaurantClick }) => {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant, index) => (
        <RestaurantCard key={index} restaurant={restaurant} onClick={() => onRestaurantClick(restaurant)} />
      ))}
    </div>
  );
};

export default RestaurantList;
