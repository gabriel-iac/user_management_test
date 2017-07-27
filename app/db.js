//export default callback => {
	// connect to a database if needed, then pass it to `callback`:
  const { Pool } = require('pg')

  const pool = new Pool()

  module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    }
  }
//	callback();
//}
