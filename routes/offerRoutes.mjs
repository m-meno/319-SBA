import express from 'express';
import Offer from '../models/offerSchema.mjs';

const router = express.Router();

//Create
router.post('/', async (req, res) => {
    const newOffer = await Offer.create(req.body);
    res.json(newOffer);
});

//Read (all offers)
router.get('/', async (req, res) => {
    const allOffers = await Offer.find({});
    res.json(allOffers);
});

//Read (one offer)
router.get('/:id', async (req, res) => {
    const oneOffer = await Offer.findById(req.params.id);
    res.json(oneOffer);
});

//Update
router.put('/:id', async (req, res) => {
    const editOffer = await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!editOffer) {
        res.status(400).json({ msg: `Offer not found.` })
    };
    res.json(editOffer);
});

//Delete 
router.delete('/:id', async (req, res) => {
    const deleteOffer = await Offer.findByIdAndDelete(req.params.id);
    if (!deleteOffer) {
        res.status(400).json('Offer not found.')
    };
    res.json(deleteOffer);
});



export default router;