import express from 'express';

const mainRouter = express.Router();

mainRouter.get('/', async(req, res) => {
    res.status(200).json({response: "Hello from abku API."})
})

export default mainRouter;