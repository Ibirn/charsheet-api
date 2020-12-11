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
      // console.log("HERE: ", res.rows);
      return res.rows[0];
    })
    .catch((err) => err);
};

const setStat = (body) => {
  console.log("S: ", body);
  return pool
    .query(
      `
  UPDATE characters
  SET strength = $1,
  dexterity = $2,
  constitution = $3,
  intelligence = $4,
  wisdom = $5,
  charisma = $6
  WHERE id = $7`,
      [
        body.strength,
        body.dexterity,
        body.constitution,
        body.intelligence,
        body.wisdom,
        body.charisma,
        body.id,
      ]
    )
    .then((res) => {
      console.log("UP: ", res.rows[0]);
      return res.rows[0];
    })
    .catch((error) => console.log(error));
};

const getInventory = (charId) => {
  const sql = `SELECT * FROM inventory WHERE id = $1`;
  const query = pool.query(sql, [charId]);
  return query
    .then((res) => {
      console.log("HERE: ", res.rows);
      return res.rows[0];
    })
    .catch((err) => err);
};

const setInventory = (body) => {
  return pool
    .query(
      `
    UPDATE inventory
    SET primary_weapon = $1,
    secondary_weapon = $2,
    armor = $3,
    attunement_1 = $4,
    attunement_2 = $5,
    attunement_3 = $6,
    bag = $7,
    gold = $8
    WHERE character_id = $9
    `,
      [
        body.primary_weapon,
        body.secondary_weapon,
        body.armor,
        body.attunement_1,
        body.attunement_2,
        body.attunemnt_3,
        body.bag,
        body.gold,
        body.id,
      ]
    )
    .then((res) => {
      console.log("UP: ", res.rows[0]);
      return res.rows[0];
    })
    .catch((error) => console.log(error));
};

module.exports = { getChar, setStat, getInventory, setInventory };
