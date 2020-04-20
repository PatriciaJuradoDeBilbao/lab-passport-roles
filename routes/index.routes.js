const express = require('express');
const router = express.Router();

const ensureLoggedIn = (req, res, next) => req.isAuthenticated() ? next(): res.redirect('/login')

/* GET home page */
router.get('/', (req, res) => res.render('index'));
router.get('/profile', ensureLoggedIn, (req, res) => res.render('auth/profile', req.user))



module.exports = router;