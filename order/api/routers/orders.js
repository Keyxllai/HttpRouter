const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET Orders"
    })
})

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "GET Order details",
        orderId: req.params.orderId
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Order POST"
    })
})

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "Delete Order details",
        orderId: req.params.orderId
    })
})

module.exports = router;