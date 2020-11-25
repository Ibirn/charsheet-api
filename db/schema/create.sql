DROP TABLE IF EXISTS characters
CASCADE;
DROP TABLE IF EXISTS inventory
CASCADE;
DROP TABLE IF EXISTS other
CASCADE;
DROP TABLE IF EXISTS skills
CASCADE;

CREATE TABLE characters
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  level INTEGER,
  race VARCHAR(255),
  avatar VARCHAR(255),
  strength INTEGER,
  dexterity INTEGER,
  constitution INTEGER,
  wisdom INTEGER,
  intelligence INTEGER,
  charisma INTEGER
);

CREATE TABLE inventory
(
  id SERIAL PRIMARY KEY NOT NULL,
  character_id INTEGER REFERENCES characters(id) ON DELETE CASCADE,
  primary_weapon TEXT,
  bag TEXT
);

CREATE TABLE other
(
  id SERIAL PRIMARY KEY NOT NULL,
  character_id INTEGER REFERENCES characters(id) ON DELETE CASCADE,
  background TEXT,
  diety TEXT,
  description TEXT
);

CREATE TABLE skills
(
  id SERIAL PRIMARY KEY NOT NULL,
  character_id INTEGER REFERENCES characters(id) ON DELETE CASCADE,
  athletics BOOLEAN DEFAULT false,
  acrobatics BOOLEAN DEFAULT false,
  sleight_of_hand BOOLEAN DEFAULT false,
  stealth BOOLEAN DEFAULT false,
  arcana BOOLEAN DEFAULT false,
  history BOOLEAN DEFAULT false,
  investigation BOOLEAN DEFAULT false,
  nature BOOLEAN DEFAULT false,
  religion BOOLEAN DEFAULT false,
  animal_handling BOOLEAN DEFAULT false,
  insight BOOLEAN DEFAULT false,
  medicine BOOLEAN DEFAULT false,
  perception BOOLEAN DEFAULT false,
  survival BOOLEAN DEFAULT false,
  deception BOOLEAN DEFAULT false,
  intimidation BOOLEAN DEFAULT false,
  performance BOOLEAN DEFAULT false,
  persuasion BOOLEAN DEFAULT false
);