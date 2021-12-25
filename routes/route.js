const router = require('express').Router();
const createTicket = require('../controllers/create');


router.post('/create',createTicket.createTicketP(),(req,res)=>{
    res.send("in progress");
});


module.exports = router;