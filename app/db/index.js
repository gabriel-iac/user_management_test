const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  database: 'my_database',
  user: 'postgres',
  password: 'pass',
  port: 5432,
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}
