/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import restaurantSource from '../../data/restaurants-source';
import { createrestaurantsItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
      <div class="latest">
        <h1>Explore Restaurant</h1>
        <div class="list" id="tes"></div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    const restaurant = await restaurantSource.listRestaurans();
    const restaurantContainer = document.querySelector('#tes');
    restaurant.forEach((restaurants) => {
    restaurantContainer.innerHTML += createrestaurantsItemTemplate(restaurants);
    });
  },
};

export default Home;