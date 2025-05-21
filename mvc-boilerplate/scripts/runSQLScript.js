const db = require('../config/db');

db.query('SELECT * FROM recipes', (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(res.rows);
});