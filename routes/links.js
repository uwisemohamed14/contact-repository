const express = require('express');
const router = express.Router();

//@route   GET api/links
//@desc    Get all users contacts
//@access  Private
router.get('/', (req,res) => {
    res.send('Get all links');
});


//@route   GET api/links
//@desc    Add links
//@access  Private
router.post('/', (req,res) => {
    res.send('Add link');
});

//@route   PUT api/links/:id
//@desc    Update link
//@access  Private
router.put('/:id', (req,res) => {
    res.send('Update link');
});

//@route   DELETE api/links/:id
//@desc    Update link
//@access  Private
router.delete('/:id', (req,res) => {
    res.send('Delete link');
});

module.exports = router; 