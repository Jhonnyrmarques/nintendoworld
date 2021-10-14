import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Image from '../models/Image';

const upload = multer(multerConfig).single('image');

class ImageController {
  async store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { character_id } = req.body;
        const image = await Image.create({ originalname, filename, character_id });

        return res.json(image);
      } catch (error) {
        return res.status(400).json({
          errors: ['Character does not exist in the database'],
        });
      }
    });
  }
}

export default new ImageController();
