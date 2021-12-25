const test = require('../models')

class Get{
    async getTicketP(req,res){
        try {
            const {requester_id} = req.body
            if(requester_id){
                axios.get('https://domain.freshdesk.com/api/v2/tickets', {

                        name,
                        email,
                        phone,
                        subject,
                        description,
                        status,
                        priority,
                        type,
                        source,
                        requester_id,
                        headers: {
                            "Content-Type": "application/json"
                        },

                    })
                    .then(response => {
                        const data = response.data;
                        res.json({
                            is_success: true,
                            message: "ticket generated successfully"
                        })
                    })
                    .catch(err => {
                        console.log(err);
                        res.json({
                            is_success: false,
                            message: "response not get from freshdesk"
                        })
                    })
                const response = await test.findOne(requester_id)
                if (response) {
                    res.json({
                        response,
                        message: "Success"
                    }).status(200)
                } else {
                    res.json({
                        response,
                        message: "Internal server error"
                    }).status(500)
                }
            }
            else return res.json({is_success:false,message:"Please Provide name ,email and phone"});
        } catch(err){
         res.json({is_success:false,message:err});
        }
    }
}