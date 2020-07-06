export default process.env.NODE_ENV !== 'production'
  ? {
      API_ENDPOINT: 'http://localhost:3000',
    }
  : {
      API_ENDPOINT: 'https://clearance.herokuapp.com',
    }
