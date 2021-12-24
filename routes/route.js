const router = require('express').Router();
const createTicket = require('../controllers/create');


router.route('/create').post(createTicket.createTicket);


module.exports = router;