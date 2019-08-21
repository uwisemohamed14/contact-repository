const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator');

const User = require('../models/User');
const Link = require('../models/Link');


//@route   GET api/links
//@desc    Get all users links
//@access  Private
router.get('/', auth, async (req,res) => {
    try{
        const links = await Link.find({user: req.user.id}).sort({date: -1});
        res.json(links);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


//@route   POST api/links
//@desc    Add links
//@access  Private
router.post('/', [ auth, 
    [
        check('about', 'Description is required').not().isEmpty(),
        check('type', 'Type is required').not().isEmpty(),
        check('url', 'URL is required').not().isEmpty()
]], async (req,res) => {
    const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const {about, type, url} = req.body;

        try{
            const newLink = new Link({
                user: req.user.id,
                about,
                type,
                url,
            });

            const link = await newLink.save();
            res.json(link);

        }
        catch(err){
            console.error(err.message);
            res.status(500).send('Server Error');
        }


});

//@route   PUT api/links/:id
//@desc    Update link
//@access  Private
router.put('/:id', auth, async (req,res) => {
    const {about, type, url} = req.body;

    //Build Link Object
    const linkFields = {};
    if(about) linkFields.about=about;
    if(type) linkFields.type=type;
    if(url) linkFields.url=url;

    try{
        let linkk = await Link.findById(re.params.id);
        if(!linkk){
            return res.status(404).json({msg: 'Link not found'});
        }
        
        //Making sure link belongs to a particular user
        if(linkk.user.toString()!==req.user.id){
            return res.status(401).json({msg: 'You are not authorized'});
        }

        linkk = await Link.findByIdAndUpdate(req.params.id, 
            { $set: linkFields },
            { new: true });
            res.json(linkk);
    }
    catch(err){
        console.error(err.message);
    }
});

//@route   DELETE api/links/:id
//@desc    Update link
//@access  Private
router.delete('/:id', auth, async (req,res) => {
    try{
        let linkk = await Link.findById(re.params.id);
        if(!linkk){
            return res.status(404).json({msg: 'Link not found'});
        }
        
        //Making sure link belongs to a particular user
        if(linkk.user.toString()!==req.user.id){
            return res.status(401).json({msg: 'You are not authorized'});
        }

        await Link.findByIdAndRemove(req.params.id);
        res.json({msg: 'Link removed'});
    }
    catch(err){
        console.error(err.message);
    }
});

module.exports = router; 