import Vue from 'vue'
import axios from 'axios'

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

const mode = process.env.NODE_ENV;
const modeServer = config.env[mode].server;
const modeUrls = config.env[mode].urls;
const Server = config.server[modeServer];
const Urls = config.urls[modeUrls];

export default {
  do: (method, key, params) => {
    console.log('url:',Server+Urls[key]);
    console.log('url:',key);
    return axios[method](Server+Urls[key], params);
  }
}
