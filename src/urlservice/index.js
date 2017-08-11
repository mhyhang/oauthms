import Vue from 'vue'
import UrlService from '../framework/url-service'


const config = {
  env: {
    development: {
      server: 'dev',
      urls: 'dev'
    }
  },
  server: {
    dev: 'http://localhost:3000'
  },
  urls: {
    dev: {
      user: '/user'
    }
  }
};


Vue.use(UrlService, config);
