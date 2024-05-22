import { Router } from 'express';
import {
  retrieveRandomPokemon,
  retrieveRandomPokemonWithType,
} from '../modules/pokemon-dao.js';

const router = Router();
/**
 * Whenever we make a GET request to /, return json of the pokemon
 */
router.get('/', async function (req, res) {
  const pokemon = await retrieveRandomPokemon();
  res.json(pokemon);
});

router.get('/search', async function (req, res) {
  const searchType = req.query.searchType;

  if (!searchType) {
    return res.status(400).json({
      message: 'please provide a searchType query parameter',
    });
  }

  const pokemon = await retrieveRandomPokemonWithType(searchType);
  res.json(pokemon);
});

export default router;
