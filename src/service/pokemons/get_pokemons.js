const env = require('../../settings/config');
const request = require('supertest')(env.url);

class GetPokemon {
  async getAllWithNameParam(name) {
    const res = await request.get(`api/pokemon/${name}`);
    return res;
  }
}

module.exports = GetPokemon;
