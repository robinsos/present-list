const express = require('express');
const router = express.Router();

// Present Model
const Present = require('../../models/Present');

// @route GET api/present
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Present.find().sort( {date:-1 })
    .then(presents =>  res.json(presents))
});

// @route POST api/present
// @desc Create a Post
// @access Public
router.post('/', (req, res) => {
    const newPresent = new Present( {
        name: req.body.name
    });
    newPresent.save().then(present =>  res.json(present));
});

// @route DELETE api/present/:id
// @desc Delete an Item
// @access Public
router.delete('/:id', (req, res) => {
    Present.findByIdAndDelete(req.params.id)
    .then( present => res.json( 'Present deleted.' ))
    .catch (err => res.status(400).json("Error: " + err));
});

module.exports = router;