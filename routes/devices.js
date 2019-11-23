const express = require('express')
const router = express.Router();
const Device = require('../models/Device');


router.get('/', (req, res) => {
    res.send('this is devices get')
})

router.post('/', async (req, res) => {
    const postRequest = new Device({
        id: req.body.id,
        IMEI: req.body.IMEI,
    })
    try {
        const savedPost = await postRequest.save();
        res.json(savedPost)
    }
    catch(err){
            res.json(err.errors)
        }
    }
)

module.exports = router;