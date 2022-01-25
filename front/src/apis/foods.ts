import { restaurantsIndex } from './../urls/index';
import axios from 'axios';
import { foodsIndex } from '../urls';

export const fetchFoods = (restaurantId: string) => {
  return axios
    .get(foodsIndex(restaurantId))
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
