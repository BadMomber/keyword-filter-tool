/** Package imports */
const express = require ('express');
const router = express.Router ();

/** File imports */
const keywordController = require ('./keywordController');
const logTime = require ('./middleware/timeLog');

/** Routes */
router.use ('/keywords', logTime, keywordController.router);

/** Exports */
module.exports = {router};
