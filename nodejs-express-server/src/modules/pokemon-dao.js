import getDatabase from './database.js';

/**
 * Gets the pokemon with the given id from the database.
 * If there is no such pokemon, undefined will be returned.
 *
 * @param {number} id the id of the pokemon to get.
 * @returns the pokemon with the given id, or undefined if the pokemon doesn't exist.
 */
export async function retrievePokemonById(id) {
  const db = await getDatabase();

  const pokemon = await db.get('SELECT * FROM pokemon WHERE id = ?', id);

  return pokemon;
}

/**
 * Gets a random pokemon.
 *
 * @returns a random pokemon
 */
export async function retrieveRandomPokemon() {
  const random = Math.round(Math.random() * 150 + 1);
  return await retrievePokemonById(random);
}

export async function retrieveRandomPokemonWithType(searchType) {
  const db = await getDatabase();

  const wildcard = `%${searchType}%`;

  const pokemon = await db.all(
    'SELECT * FROM pokemon WHERE types LIKE ?',
    wildcard,
  );

  const i = Math.floor(Math.random() * pokemon.length);
  return pokemon[i];
}
