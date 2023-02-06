const router = require('express').Router();
//imports all routes in the api folder
const apiRoutes = require('./api');
//imports all routes in homeroutes file
const homeRoutes = require('./home-routes');

//establishes what identifier the types of routes use
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;