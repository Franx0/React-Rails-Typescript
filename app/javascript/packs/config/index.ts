export const config = {
  'development': {
    apiHost: "localhost",
    client: {
      url: 'http://localhost:3000/api'
    },
    originHost: 'http://localhost:3000',
  },
  'production': {
    apiHost: "production.host",
    client: {
      url: 'https://{production}/api'
    },
    originHost: 'https://{production}',
  }
}

export default config;
