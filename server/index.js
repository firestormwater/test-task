require('dotenv').config()
const express = require('express')
const cors = require('cors');
const detialRouter = require('./routes/detail.router')

const PORT = process.env.PORT || 5000

const app = express()

const corsOptions ={
   origin:'*',
   credentials:true,
   optionSuccessStatus:200,
}

app.use(express.json())
app.use(cors(corsOptions))
app.use('/api', detialRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))