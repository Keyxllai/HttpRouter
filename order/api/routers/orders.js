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
    const order = {
        name: req.body.name,
        price: req.body.price
    }

    console.log("body: "+ req.body);
    res.status(200).json({
        message: "Order POST",
        order: order
    })
})

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "Delete Order details",
        orderId: req.params.orderId
    })
})

module.exports = router;