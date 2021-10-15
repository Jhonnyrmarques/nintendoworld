"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Character = require('../models/Character'); var _Character2 = _interopRequireDefault(_Character);
var _Image = require('../models/Image'); var _Image2 = _interopRequireDefault(_Image);

class CharacterController {
  async index(req, res) {
    const characters = await _Character2.default.findAll({
      attributes: ['id', 'name', 'description', 'creators', 'universe'],
      order: [['id', 'DESC']],
      include: {
        model: _Image2.default,
        attributes: ['url', 'filename'],
      },
    });
    res.json(characters);
  }

  async store(req, res) {
    try {
      const character = await _Character2.default.create(req.body);
      return res.json(character);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID not found in database'],
        });
      }

      const character = await _Character2.default.findByPk(id, {
        attributes: ['id', 'name', 'creators', 'universe'],
        order: [['id', 'DESC']],
      });

      if (!character) {
        res.status(400).json({
          errors: ['Character not found in database'],
        });
      }

      return res.json(character);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID not found in database'],
        });
      }

      const character = await _Character2.default.findByPk(id);

      if (!character) {
        return res.status(400).json({
          errors: ['Character not found in database'],
        });
      }

      const characterUpdated = await character.update(req.body);
      return res.json(characterUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID not found in database'],
        });
      }

      const character = await _Character2.default.findByPk(id);

      if (!character) {
        return res.status(400).json({
          errors: ['Character not found in database'],
        });
      }
      await character.destroy();
      return res.json('Character successfully deleted');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new CharacterController();
