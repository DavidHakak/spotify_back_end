const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ name: "noshe", age: "22" })
})

router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

router.post('/', (req, res) => {
})


module.exports = router