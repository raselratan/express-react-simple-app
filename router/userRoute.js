const express = require('express')
const router = express.Router()

//registration router
router.post('/register',(req,res,next)=>{
    res.json({msg:"MEARN"})
})

//login router
router.post('/login',(req,res,next)=>{
    
})

module.exports = router