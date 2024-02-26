const express = require("express")


const app = express()


const port = 4001

const users = [
    {
        name:'jamsheed',
        lname:"khan",
        inst:"SMIT"

    },
    {
        name:'Noman',
        lname:"khan",
        inst:"SMIT"

    },
    {
        name:'Huzaifa',
        lname:"khan",
        inst:"SMIT"

    },
]

app.use(express.json())

app.listen(port,(req,res)=>{
    console.log('server is running')
})

app.get('/',(req,res)=>{
res.send(users)
})



app.post('/',(req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.send({ message: "user added successfully"});
})