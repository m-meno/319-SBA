import express from 'express';
import User from '../models/userSchema.mjs';


const router = express.Router();

//Create
router.post('/', async (req, res) => {
    const newUser = await User.create(req.body);
    res.json(newUser);
});

//Read (all users)
router.get('/', async (req, res) => {
    const allUsers = await User.find({});
    res.json(allUsers);
});

//Read (one user)
router.get('/:id', async (req, res) => {
    const oneUser = await User.findById(req.params.id);
    res.json(oneUser);
});

//Update
router.put('/:id', async (req, res) => {
    const editUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!editUser) {
        res.status(400).json({ msg: `User not found.` })
    };
    res.json(editUser);
});

//Delete 
router.delete('/:id', async (req, res) => {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
        res.status(400).json('User not found.')
    };
    res.json(deleteUser);
});



export default router;