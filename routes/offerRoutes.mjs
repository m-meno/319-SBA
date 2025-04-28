import express from 'express';
import Offer from '../utilities/offerData.mjs';

const router = express.Router();

//Post
router.post('/', async (req, res) => {
    const newOffer = await Offer.create(req.body);
    res.json(newOffer);
});