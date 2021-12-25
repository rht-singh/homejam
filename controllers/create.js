const axios = require('axios');
const test = require('../models')

class Create{

    async createTicketP(req,res){
     try{
        const {name,email,phone,subject,description,status,priority,type,source,requester_id } = req.body;
        if(phone && email && name){
            axios.post('https://domain.freshdesk.com/api/v2/tickets',{
                
                    name,email,
                    phone,subject,
                    description,status,
                    priority,type,
                    source,requester_id,
                headers: { "Content-Type": "application/json" },

                })
                .then(response =>{
                    const data = response.data;
                    res.json({is_success: true,message:"ticket generated successfully"})
                })
                .catch(err =>{
                    console.log(err);
                    res.json({is_success: false,message:"response not get from freshdesk"})
                })
            const response = await test.Create({
                name, email,
                phone, subject,
                description, status,
                priority, type,
                source, requester_id,
            })
            
        }
        else return res.json({is_success:false,message:"Please Provide name ,email and phone"});
    }
     catch(err){
         res.json({is_success:false,message:err});
     }
    }

}

module.exports = new Create();