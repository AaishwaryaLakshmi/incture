import React, { Component } from 'react';

class RestaurantInfo extends Component {
  render() {
    const { restaurant } = this.props;
    return (
      <div className="restaurant-info">
        <h2>{restaurant.name}</h2>
        <p>Address: {restaurant.address}</p>
        <div>
          <h3>Menu:</h3>
          <ul>
            {restaurant.menu.map((dish, index) => (
              <li key={index}>
                {dish.name} - Rs.{dish.price} - Quantity: {dish.quantity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default RestaurantInfo;
