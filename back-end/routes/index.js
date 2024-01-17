//import express and necessary routes
const express = require('express');
const router = express.Router();
const authRouter = require('./authRouter');

router.use('/auth', authRouter);


//export express router
module.exports = router;