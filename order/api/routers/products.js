const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Hello GET Products"
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Hello POST Products"
    })
})

router.get('/:id', (req, res, next) => {
    let pid = req.params.id;
    console.log(pid);
    res.status(200).json({
        id: pid,
        message: "Hello GET Products"
    })
})

module.exports = router;