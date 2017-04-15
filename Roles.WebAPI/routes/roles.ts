import { Router, Request, Response } from 'express';
import { mongoose } from 'mongoose';
var UserRoles = require('../models/userRoles');

const router = Router();

router.get('/:user_id', (req: Request, res: Response) => {
    UserRoles.find({ user_id: req.params.user_id }, (err, user) => {
        if (err) res.send(err);

        res.json(user);
    });
});

router.put('/', (req: Request, res: Response) => {
    UserRoles.findOneAndUpdate({ user_id: req.body.user_id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true }, (err, user) => {
        if (err) res.send(err);

        res.json(user);
    });
});

export default router;