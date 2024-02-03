const { check } = require("express-validator")
const {validationResult} = require("express-validator")


exports.valildateForm = [
    check("name").notEmpty().withMessage("please enter name"),
    check("phone").isMobilePhone().withMessage("please enter phone"),
    check("email").isEmail().withMessage("please enter Valid email"),
    check("message").isLength({ max: 100 ,min:1}).withMessage("please enter message"),
    check("intrest").notEmpty().withMessage("please enter intrest")
]
exports.isValildateForm = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.array().length> 0){
      return  res.status(400).json({message:errors.array()[0].msg})

        }next()

}
