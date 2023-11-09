// require in .env file to securely store password;
const { Pool } = require('pg');
require('dotenv').config();
const pass = process.env.password
// require in memoized OrderId function to update order id values...?
const orderController = {};

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

// now we can post this order information to the database.
orderController.createCustomer = async (req, res, next) => {
  const { cust_street, cust_city, cust_first, cust_last, cust_phone, cust_zip } = req.body;
  const customer = [
    cust_first,
    cust_last,
    cust_street,
    cust_city,
    cust_zip,
    cust_phone];
  // console.log(cust_first, cust_last)
  try {
    const query = {
      text: 'SELECT 1 FROM "Customer_Orders"."Customers" WHERE cust_first=$1 AND cust_last=$2',
      values: [cust_first, cust_last]
    }
    const response = await pool.query(query)
    // console.log(response.rows)
    if (response.rows.length === 0) {
      // const customerInfo = [...Object.values(customer)]
      // console.log(customerInfo)
      const query = {
        text: 'INSERT INTO "Customer_Orders"."Customers" VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
        values: [...customer]
      }
      const response = await pool.query(query)
      // console.log(response);
      console.log("successfully created new customer")
      return next()
    }
    console.log("customer found in database!");
    return next();
  }
  catch {
    const error = {
      log: 'Error in orderController middleware trying to create new customer',
      status: 500,
      message: { err: 'Couldn\'t make customer - make sure no fields are empty!' }
    }
    return next(error);
  }
};


orderController.createOrder = async (req, res, next) => {
  // console.log('server - orderController.createOrder req.body: ', req.body)
  const { cust_first, cust_last, message, recip_city, recip_first, recip_last, recip_phone, recip_street, recip_zip, total } = req.body

  const idQuery = {
    text: 'SELECT cust_id FROM "Customer_Orders"."Customers" WHERE cust_first=$1 AND cust_last=$2',
    values: [cust_first, cust_last]
  }
  const response = await pool.query(idQuery)
  // console.log(response);
  const cust_id = response.rows[0].cust_id;
  const order = [cust_id, recip_first, recip_last, recip_street, recip_city, recip_zip, recip_phone, total, message]
  try {
    const orderQuery = {
      text: 'INSERT INTO "Customer_Orders"."Orders" VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      values: [...order]
    }
    const response = await pool.query(orderQuery);
    console.log(response);
    return next();
  }
  catch {
    const error = {
      log: 'Error in orderController middleware trying to create new order',
      status: 500,
      message: { err: 'Couldn\'t make order - make sure no fields are empty!' }
    }
    return next(error);
  }
}


module.exports = orderController;