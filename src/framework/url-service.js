const mode = process.env.NODE_ENV;//'production'/'development'

export default {

  install: function (Vue, options) {
    const env = options.env[mode];
    const server = options.server[env.server];
    const urls = options.urls[env.urls];

    Vue.prototype.$getUrl = function (url) {
      return server + urls[url];
    }

  }
}
