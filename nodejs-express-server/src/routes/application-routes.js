import { Router } from 'express';
import {
  retrieveRandomPokemon,
  retrieveRandomPokemonWithType,
} from '../modules/pokemon-dao.js';

const router = Router();

router.get('/', (_, res) =>
  res.send(
    'Welcome to the API Server please now read through the readme & server code 🙂',
  ),
);

router.get('/random', async function (req, res) {
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
