/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
// eslint-disable-next-line import/extensions
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createrestaurantsItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
          <div class="content">
            <h2 class="content__heading">Your Liked RESTAURANTS</h2>
            <div id="restaurants" class="restaurants">
     
            </div>
          </div>
        `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');

    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += createrestaurantsItemTemplate(restaurants);
    });
  },
};

export default Like;