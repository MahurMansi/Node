var express = require('express');
const app = express();
const port = 8210;
const mongo = require ('mongodb');
const MongoClient = mongo.MongoClient;
// connecting to local mongodb
/*
const mongourl = "mongodb://localhost:27017"
*/
// connecting to cloud mongodb
const mongourl = " mongodb+srv://Mansi_Mahur:What_thehell00@cluster0.2girj.mongodb.net/edumato?retryWrites=true&w=majority"
let db;
let col_name = "category"
 //api-1
app.get('/',(req , res) => {
 res.send("Welcome  to Api ")
})
  /*
 var employee =[
    {
        "id":1,
        "category": "Fashion"
    },
    {
        "id":2,
        "category":"Electronics"
    },
    {
        "id":3,
        "category":"Essentials"
    },
    {
        "id":4,
        "category": "Footwear"
    }
] 
 
app.get('/employee', (req,res) => {
    res.send(employee)
})
*/
app.get('/category', (req,res) => {
    db.collection(col_name).find().toArray((err,result) =>
    {
        if(err) throw err;
        res.send(result)
    })
})


MongoClient.connect(mongourl, (err,client) => {
    if(err) console.log("Error While Connecting")
     db = client.db('edumato')
})
 app.listen(port,() => {
     console.log(`Listening on port no ${port}`)
 })

 app.get('/test',(req , res) => {
    res.send("Welcome  to Api ");
   
   })