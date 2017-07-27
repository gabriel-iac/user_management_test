const db = require('../db')
import app from "../app/index.js"

app.get('/users', (req, res, next) => {
  db.query('SELECT * FROM users', (err, res) => {
    if (err) {
      return next(err)
    }
    res.send(res.rows[0])
  })
})