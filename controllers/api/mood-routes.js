const router = require('express').Router();
const { Mood } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/profile', withAuth, async (req, res) => {
    try {
      const MoodData = await Mood.create(
        {
          hows_today: req.body.hows_today,
          improve_day: req.body.improve_day,
          proud_today: req.body.proud_today,
          description: req.session.description,
          quote_descript: req.body.quote_descript,
        }
      ).catch((err) => {
        res.json(err);
        return;
      });
      if (MoodData) {
        // res.status(404).json({ message: 'No mood-form found with that id!' });
        
        return;
      }
      res.status(200).json(MoodData);
    } catch (err) {
      console.log('nothing to see here')
    //   res.status(500).json(err);
      return;
    }
  });

  module.exports = router;