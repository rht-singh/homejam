const router = require('express').Router();
const createTicket = require('../controllers/create');


router.route('/create').post(createTicket.createTicket,(req,res)=>{
    console.log("in progress");
});


module.exports = router;