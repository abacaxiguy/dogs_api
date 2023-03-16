export default {
  url: process.env.APP_PORT
    ? `http://localhost:${process.env.APP_PORT}`
    : 'http://localhost:3000',
};
