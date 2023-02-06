//imports express router, mood model, and withauth helper
const router = require('express').Router();
const { Mood } = require('../../models');
const withAuth = require('../../utils/auth');

//route that creates new mood based off of model and user input on profile page, pushes to db
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


  //attempting to display previous user moods to page
  router.get('/:id', withAuth, async (req, res) => {
    try {
      const moodData = await Mood.findAll(req.params.id, {
        include: hows_today,
      });
      const mood = moodData.get({ plain: true });

      console.log(mood);
      if (!moodData) {
        res.status(400).json({ message: "Not Found" });
        return;
      }
      res.status(200).json({ fluff });
    } catch (err) {
      res.status(500).json(err);
    }
    return;
  });
    
//attempting to display previous user moods to page
  // router.get('/:id', withAuth, async (req, res) => {
  //   try {
  //     const MoodData = await Mood.findAll(req.params.id, {
  //       include: hows_today,
  //     });
  //     const mood1 = MoodData.get({ plain: true });
  //     console.log(mood1)
  
  //     if (!MoodData) {
  //       res.status(400).json({ message: "Mood Not Found" });
  //       return;
  //     }
  //     res.status(200).json({ mood });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  //   return;
  // });
//exports routes
  module.exports = router;