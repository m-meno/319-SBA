import express from 'express';
import Request from '../models/requestSchema.mjs';

const router = express.Router();

//Create
router.post('/', async (req, res) => {
    const newRequest = await Request.create(req.body);
    res.json(newRequest);
});

//Read
router.get('/', async (req, res) => {
    const allRequests = await Request.find({});
    res.json(allRequests);
});

//Read (one offer)
router.get('/:id', async (req, res) => {
    const oneRequest = await Request.findById(req.params.id);
    res.json(oneRequest);
});

//Update
router.put('/:id', async (req, res) => {
    const editRequest = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!editRequest) {
        res.status(400).json({ msg: `Request not found.` })
    };
    res.json(editRequest);
});

//Delete 
router.delete('/:id', async (req, res) => {
    const deleteRequest = await Request.findByIdAndDelete(req.params.id);
    if (!deleteRequest) {
        res.status(400).json('Request not found.')
    };
    res.json(deleteRequest);
});

export default router;