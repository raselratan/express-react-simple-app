const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const UserModel = require('../models/User')
const registerValidator = require('../validator/registerValidator')
const loginValidator = require('../validator/loginValidator')
const { serverError } = require('../utils/error')

const register = (req,res,next) => {
    let { name, email, password, confirmPassword } = req.body
    let validate = registerValidator({ name, email, password, confirmPassword })

    if (!validate.isValid) {
        return res.status(400).json(validate.error)
    }else{
       UserModel.findOne({email}).then(user=>{
           if(user){
               return res.status(400).json({message:'User Already Exist'})
           }

            bcrypt.hash(password,11,(err,hash) => {
                if(err){
                    return res.status(400).json({message:'Sever Error'})
                }

                let User = new UserModel({ 
                    name,
                    email, 
                    password:hash 
                 })
                 User.save().then(data=>{
                    return res.status(200).json(data)
                 }).catch(error=>serverError(res,error))
                 return  res.json(User)


            })

       }).catch(error=>serverError(res,error))
    }

}

const login = (req,res,next) => {
    let {email,password} = req.body

    let validate = loginValidator({email,password})

    if(!validate.isValid){
        return res.status(400).json({message:'Server Error'})
    }

    UserModel.findOne({email}).then(user=>{
        if(!user){
            return res.status(400).json({message:'Email incorrect'})
        }

        bcrypt.compare(password,user.password,(error,result)=>{
            if(error){
                return serverError(res,error)        
            }
            if(!result){
                return res.status(400).json({message:'Password incorrect'})
            }

            let token = jwt.sign(
                { 
                    _id: user._id,
                    name:user.name,
                    email:user.email 
                },
                'RMRatan', { expiresIn:'2h'}
            );

            return res.status(201).json({token:`Bearer ${token}`,message:'Login Success'})

        })

    })
    .catch(error=>serverError(res,error))

}

module.exports = {
    register,login
}