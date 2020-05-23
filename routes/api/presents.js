const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

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
// @access Private
router.post('/', auth, (req, res) => {
    const newPresent = new Present( {
        description: req.body.description,
        address: req.body.address
    });
    newPresent.save().then(present =>  res.json(present));
});

// @route POST api/present
// @desc Edit a present
// @access Private
router.post('/edit/:id', auth, (req, res) => {
    Present.findOne({ _id: req.params.id }, function(err, foundObj){
        if (err) {
            console.log( err );
            res.status(400).json("Error: " + err);
        } else {
            if (!foundObj) {
                res.status(404).json("Error: " + err);
            } else {
                foundObj.description = req.body.description;
                foundObj.address = req.body.address;
                foundObj.save(function(err, updatedObject) {
                    if (err) {
                        console.log( err );
                        res.status(400).json("Error: " + err);
                    } else {
                        res.json(updatedObject);
                    }
                });
            }
        }
    });
});

// @route DELETE api/present/:id
// @desc Delete an Item
// @access Private
router.delete('/:id', auth, (req, res) => {
    Present.findByIdAndDelete(req.params.id)
    .then( present => res.json( 'Present deleted.' ))
    .catch (err => res.status(400).json("Error: " + err));
});

module.exports = router;