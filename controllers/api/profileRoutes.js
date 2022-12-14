const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  // if (req.session.logged_in) {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        include: [{ all: true, nested: true }],
        // attributes: { exclude: ['password'] }
      });
      const users = userData.get({ plain: true });
      res.render('profile', {
        layout: 'main',
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.render('login', {
        layout: 'landing',
      });
      // res.status(500).json(err);
    }
  // }

  // res.render('login', {
  //   layout: 'landing',
  // });
  });

  // NO EDITING FUNCTIONALITY YET
  router.put('/:id', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.update(req.session.user_id, {
        include: [{ all: true, nested: true }],
      });
      // const users = userData.get({ plain: true });
      // res.render('edit', {
      //   users,
      //   logged_in: req.session.logged_in,

      // });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;