const router = require('express').Router();
const userRoutes = require('./user-routes');


router.use('/users', userRoutes);

const moodRoutes = require('./mood-routes');
router.use('/moods', moodRoutes);

module.exports = router;