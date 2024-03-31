import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { Register } from "../models/register.js"
import bodyParser from "body-parser"


const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/main")

app.get('/',async (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {
    Register.create(req.body)
    res.send("Maybe")
})

app.post('/login', async (req, res) => {
    let username=req.body.username
    let password=req.body.password
    let b=await Register.findOne({username:username})

    console.log(b)
    if(b==null){
        res.send("No User Found")
    }
    else{
        if(b.password!=password){
            res.send("Invalid Password")
        }else{
            res.send("Success")
        }
    }
    // .then(user=>{
    //     if(user){
    //         if(user.password===password){
    //             res.send("Success")
    //         }else{
    //             res.send("Invalid Password")
    //         }
    //     }else{
    //         res.send("No User Found")
    //     }
    // })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})