const db = require('../db')

app.get('/users', (req, res, next) => {
  db.query('SELECT * FROM users', (err, res) => {
    if (err) {
      return next(err)
    }
    res.send(res.rows[0])
  })
})