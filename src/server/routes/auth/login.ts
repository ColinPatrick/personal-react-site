import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.post('/', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const [userFound] = await db.users.find('email', email);
        res.json(userFound);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "You done screwed up!"});
    };
});

export default router;