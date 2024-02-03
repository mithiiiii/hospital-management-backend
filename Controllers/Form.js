const Form = require("../Models/Form")


exports.addForm = async(req,res,next)=>{
    try{
       const _form = new Form(req.body)
       await _form.save()
       req.subject = "user form submitted"
       req.text = "you have successfully signed up"
       next()
    }
    catch (error){
        console.log(error);
        res.status(400).json({message:"error occured"})

        }

    }

