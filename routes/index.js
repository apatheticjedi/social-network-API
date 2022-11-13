const router = require('express').Router();

const apiRoutes = require('./api');

// add /api prefix to all api routes from 'api' directory
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
  });
  
  module.exports = router;