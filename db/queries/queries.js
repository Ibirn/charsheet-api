const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const getChar = (charId) => {
  const sql = `SELECT * FROM characters WHERE id = $1`;
  const query = pool.query(sql, [charId]);
  return query
    .then((res) => {
      console.log("HERE: ", res.rows);
      return res.rows[0];
    })
    .catch((err) => err);
};

const setStat = (stat, value, id) => {
  console.log("S: ", stat, "\nV: ", value, "\nI: ", id);
  return pool
    .query(
      `
  UPDATE characters
  SET ${stat} = $1
  WHERE id = $2
  RETURNING *`,
      [value, id]
    )
    .then((res) => {
      console.log("UP: ", res.rows);
      return res.rows[0];
    })
    .catch((error) => console.log(error));
};

module.exports = { getChar, setStat };
