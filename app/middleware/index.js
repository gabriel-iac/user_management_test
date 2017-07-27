import { Router } from 'express';

export default ({ config, db }) => {
	let routes = Router();

	// add middleware here

  app.get('/users', (req, res, next) => {
    db.query('SELECT * FROM users', (err, res) => {
      if (err) {
        return next(err)
      }
      res.send(res.rows[0])
    })
  })

	return routes;
}
