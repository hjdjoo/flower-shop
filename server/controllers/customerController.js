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



customerController.findCustomer = async (req, res, next) => {
  const searchVal = req.params.searchVal
  console.log('customerController - req.params.searchVal: ', searchVal);
  try {
    if (!parseInt(searchVal)) {
      const firstLastArr = searchVal.split(' ')
      if (firstLastArr.length === 1) {
        const query = {
          text: 'SELECT * FROM "Customer_Orders"."Customers" WHERE "cust_first" ILIKE $1 OR "cust_last" ILIKE $1',
          values: [...firstLastArr]
        }
        const response = await pool.query(query)
        // console.log(response)
        res.locals.customer = response.rows[0]
      }
      if (firstLastArr.length === 2) {
        const query = {
          text: 'SELECT * FROM "Customer_Orders"."Customers" WHERE "cust_first" ILIKE $1 OR "cust_last" ILIKE $1 OR "cust_first" ILIKE $2 OR "cust_last" ILIKE $2',
          values: [...firstLastArr]
        }
        const response = await pool.query(query)

        res.locals.customer = response.rows[0]
      }
    }
    else {
      const normalizedPhone = parseInt(searchVal.replaceAll(' ', '').replaceAll('-', ''))
      console.log(normalizedPhone)
      const query = {
        text: 'SELECT * FROM "Customer_Orders"."Customers" WHERE "cust_phone" = $1',
        values: [normalizedPhone]
      }
      const response = await pool.query(query)
      res.locals.customer = response.rows[0]
    }
    res.status(200).json(res.locals.customer)
  }
  catch {
    const error = {
      log: 'Error in customerController middleware trying to get customer info',
      status: 500,
      message: { err: 'Couldn\'t find customer!' }
    }
    res.status(500).send(error.message)
    return next(error)
  }

}

customerController.updateCustomer = async (req, res, next) => {
  const customerData = req.body;
  console.log(customerData)
  const query = {
    text: 'UPDATE "Customer_Orders"."Customers" SET "cust_first"=$1, "cust_last"=$2, "cust_street"=$3, "cust_city"=$4, "cust_zip"=$5, "cust_phone"=$6 WHERE cust_id=$7',
    values: customerData
  }
  const response = await pool.query(query);

}

module.exports = customerController;