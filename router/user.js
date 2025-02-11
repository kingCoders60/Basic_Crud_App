const express = require('express');
const User = require('../models/user.js')
const router = express.Router();

router.post('/',async (req,res)=>{
    const user = new User(req.body);
    user.save();
    res.status(200).send(user);
})

router.get('/:id',async(req,res)=>{
    const user = await User.find();
})

router.put('/:id',async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.parmas.id, {new:true})
    res.send(user);
})

router.delete('/:id',async(req,res)=>{
    const user = await User.findByIdAndDelete(req.parmas.id)
    res.send(user);
})

module.exports = router;