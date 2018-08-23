import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const data = {
  currentIndex: 0,
  images: [
    {
      url: 'https://hdqwalls.com/download/nature-lake-reflection-on-river-5t-2560x1440.jpg',
      title: 'Nature Lake Reflection On River',
      desc: '1',
    },
    {
      url: 'https://hdqwalls.com/download/forest-sunbeam-image-2560x1440.jpg',
      title: 'Forest Sunbeam',
      desc: '2',
    },
    {
      url: 'https://hdqwalls.com/download/sunbeam-mountains-5k-39-2560x1440.jpg',
      title: 'Sunbeam Mountains 5k',
      desc: '3',
    },
    {
      url: 'https://hdqwalls.com/download/first-sunbeams-of-day-nature-forest-trees-3j-2560x1440.jpg',
      title: 'First Sunbeams Of Day Nature Forest Trees',
      desc: '4',
    },
    {
      url: 'https://hdqwalls.com/download/featherweight-fly-wind-strauss-spring-ng-2560x1440.jpg',
      title: 'Featherweight Fly Wind Strauss Spring',
      desc: '5',
    },
    {
      url: 'https://hdqwalls.com/download/hot-spring-pool-2560x1440.jpg',
      title: 'Hot Spring Pool',
      desc: '6',
    },
    {
      url: 'https://hdqwalls.com/download/spring-forest-trees-wide-2560x1440.jpg',
      title: 'Spring Forest Trees',
      desc: '7',
    },
    {
      url: 'https://hdqwalls.com/download/france-spring-lake-grass-2560x1440.jpg',
      title: 'France Spring Lake Grass',
      desc: '8',
    },
  ],
};

const store = createStore(rootReducer, data);

export default store;
