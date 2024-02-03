const nodemailer = require("nodemailer")

exports.sendEmail = (req,res)=> {
     try{
        const transport = nodemailer.createTransport({
        service:"gmail",
        host:"smtp.gmail.com",
        port:465,
        auth:{
            user:"luckysinha300@gmail.com",
            pass:"loim dfnk krtf rnxv"
        
        },
        tls:{
            rejectUnauthorized:false
        }


        })
        
     
     const data ={
        from:"luckysinha300@gmail.com",
        to:req.body.email,
        subject:req.subject,
        text:req.text
     }
     transport.sendMail(data,(error,info)=>{
        if(error){
            console.log(error);
            res.status(400).json({message:"email delivery error"})
        }
        else{
            console.log(info)
            res.status(201).json({message:"Success"})

        }
     })
} catch(error){

}
}