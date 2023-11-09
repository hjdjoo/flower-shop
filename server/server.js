const express = require('express');
const path = require('path');
/** server */
const app = express();
const PORT = 3000;

/** Require in routers*/
const orderRouter = require('./routes/order')

/** parse incoming requests */
app.use(express.json());
app.use(express.urlencoded());

/** serve static files to front end */
// console.log('server.js - trying to serve ', path.join(__dirname, '../dist'))
app.use(express.static(path.join(__dirname, '/client')))
// app.use('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/index.html'))
// })
// app.use(express.static(path.resolve(__dirname, '/client/scss')))
app.use('/dist', express.static(path.join(__dirname, '../dist')))

/** Define route handlers */
console.log('about to handle route handlers');
app.use('/place_order', orderRouter)



/** Unknown route handler */
app.use('*', (req, res) => {
  console.error('Page not found!');
  res.sendStatus(404);
})


/** Global error handler */
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Global error handler caught unknown middleware error',
    status: 500,
    message: {
      err: 'Status: 5000 - You destroyed the website!'
    }
  }
})
/** starting server */

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

module.exports = app;