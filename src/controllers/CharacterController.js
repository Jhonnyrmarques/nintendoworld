import Character from '../models/Character';

class CharacterController {
  index(req, res) {
    res.send('OK');
  }

  async store(req, res) {
    try {
      const character = await Character.create(req.body);
      return res.json(character);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CharacterController();
