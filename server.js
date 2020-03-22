const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const path = require('path')
const userRouter = require('./router/userRoute')


const app = express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




app.get('/',(req,res)=>{
    res.json({
        msg:"Hi, MEARN"
    })
})

app.use('/api/users',userRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`SERVER started at port ${PORT}`)
    mongoose.connect('mongodb://localhost:27017/money-management',
        {useNewUrlParser:true},
        ()=>{
            console.log('DB connected...')
        }
    )
})