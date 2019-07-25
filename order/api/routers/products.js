const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Product = require("../models/product");

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Hello GET Products"
    })
})

router.post('/', (req, res, next) => {

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })

    product
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));

    res.status(200).json({
        message: "Hello POST Products",
        product: product
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