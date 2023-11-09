// require in .env file to securely store password;
const { Pool } = require('pg');
require('dotenv').config();
const pass = process.env.password
// require in memoized OrderId function to update order id values...?
const customerController = {};

// elephantSQL URL
const pgURL = `postgres://gsofxvlr:${pass}@peanut.db.elephantsql.com/gsofxvlr`
// creating postgres pool and checking connection:
const pool = new Pool({
  connectionString: pgURL
});
pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to database!', '\n', 'err: ', err)
  }
  else {
    console.log('Connected to database!')
  }
});

customerController.findCustomer = () => {


}

customerController.updateCustomer = () => {


}