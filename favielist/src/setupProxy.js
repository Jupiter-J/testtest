// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');
const MOVIE_API_ADDR = process.env.API_IP
const BACK_URI = `http://${MOVIE_API_ADDR}`
module.exports = function(app) {

  //CORS ERROR
    app.use(
        '/movie',
        createProxyMiddleware({
          target: BACK_URI,
          changeOrigin: true,
        })
      );
      
      app.use(
        '/user',
        createProxyMiddleware({
          target: BACK_URI,
          changeOrigin: true,
        })
      );

  app.use(
    '/v1',
    createProxyMiddleware({
      target: 'https://openapi.naver.com',
      changeOrigin: true,
    })
  );
};
