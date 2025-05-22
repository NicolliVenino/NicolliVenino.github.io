-- init.sql

-- Criar extensão para suportar UUIDs, se ainda não estiver ativada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Criar tabela de usuários com UUID como chave primária
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  avatar TEXT NOT NULL,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  description TEXT
);

CREATE TABLE IF NOT EXISTS folders (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS recipes (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT,
  type TEXT NOT NULL,
  category TEXT NOT NULL,
  directions TEXT NOT NULL,
  prep_time INT,
  cook_time INT,
  servings INT,
  amount INT,
  score INT,
  author TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS folders_recipes (
  id SERIAL PRIMARY KEY,
  folder_id INT NOT NULL REFERENCES folders(id) ON DELETE CASCADE,
  recipe_id INT NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
  UNIQUE(folder_id, recipe_id)
);

CREATE TABLE IF NOT EXISTS ingredients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  specification TEXT
);

CREATE TABLE IF NOT EXISTS recipes_ingredients (
  id SERIAL PRIMARY KEY,
  recipe_id INT NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
  ingredient_id INT NOT NULL REFERENCES ingredients(id) ON DELETE CASCADE,
  UNIQUE(recipe_id, ingredient_id)
);

INSERT INTO recipes (
  name, image, type, category, directions, prep_time, cook_time, servings, amount, score, author
) VALUES (
  'Lasanha de Berinjela',
  'https://example.com/images/lasanha_berinjela.jpg',
  'Prato Principal',
  'Salagado',
  'Fatie as berinjelas e grelhe levemente. Monte camadas com molho de tomate, queijo e berinjela. Leve ao forno por 30 minutos a 180°C.',
  25,
  30,
  6,
  1,
  4,
  'Luiza Martins'
);