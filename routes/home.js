const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('I am in Home')
})

router.get('/specific', (req, res) => {
    res.send('I am in specific Home')
})

module.exports = router;