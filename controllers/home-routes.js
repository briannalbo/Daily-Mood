//imports express router, user model, and authorization helper
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


// Prevent non logged in users from viewing the homepage
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((user) => user.get({ plain: true }));

    res.render('profile', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log('not logged in');
  }
});
//if a session already exists, redirects user to their profile
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('profile');
    return;
  }

  res.render('login');
});
//exports router
module.exports = router;