import { Router } from 'express';
import {
  retrieveRandomPokemon,
  retrieveRandomPokemonWithType,
} from '../modules/pokemon-dao.js';
import { callCounterMiddleware } from '../middleware/call-counter.js';

const router = Router();

/**
 * Whenever we make a GET request to /api/random, retrieve a random pokemon from the database and return
 * it as JSON. Using the counter-cookie-middleware, we will also increment the callCount cookie by 1.
 */
router.get('/random', callCounterMiddleware, async function (req, res) {
  const pokemon = await retrieveRandomPokemon();
  res.json(pokemon);
});

/**
 * Whenever we make a POST request to /api/random, retrieve a random pokemon from the database which
 * has a type matching the type supplied in the request body, and return it as JSON.
 * Using the counter-cookie-middleware, we will also increment the callCount cookie by 1.
 *
 * NOTE: In reality, this would probably be done using a GET request with a query parameter,
 * rather than a POST with a request body. I just wrote it this way so I could have an easy
 * example of how to send a POST request from Java.
 */
router.post('/random', callCounterMiddleware, async function (req, res) {
  const pokemon = await retrieveRandomPokemonWithType(req.body.type);
  res.json(pokemon);
});

export default router;
