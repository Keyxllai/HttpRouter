const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Product = require("../models/product");
router.get('/', (req, res, next) => {
    Product.find()
        .exec()
        .then(result => {
            res.status(200).json({
                success: true,
                result: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err,
                success: false
            });
        });
});

router.post('/', (req, res, next) => {

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    product
        .save()
        .then(result => {
            res.status(200).json({
                success: true,
                result: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err,
                success: false
            })
        });
});

router.get('/:id', (req, res, next) => {
    let pid = req.params.id;
    Product.findById(pid)
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json({
                result: doc,
                success: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                result: null,
                error: err,
                success: false
            });
        });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Product.remove({
            _id: id
        })
        .exec()
        .then(result => {
            res.status(200).json({
                success: true,
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                error: err
            });
        });
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const updateOps = {};
    // for (let ops of req.body) {
    //     updateOps[ops.propName] = ops.value;
    // }

    Product.update({_id: id}, {$set: {name: req.body.name, price: req.body.price}})
        .exec()
        .then(result => {
            res.status(200).json({
                success: true,
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                error: err
            });
        });
});

module.exports = router;