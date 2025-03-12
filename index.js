var express=require('express')
var mongoose=require('mongoose')
var app=express();
var cors=require('cors')
app.use(cors())
app.use(express.json())

// create a root path

app.get('/',(req,res)=>{res.send("Welcome")})

// open the port

app.listen(8080,()=>{console.log("Server connected")})

// connect mongodb

mongoose.connect('mongodb+srv://anisha:anisha@anishar.xesp5.mongodb.net/Bank').then(()=>{console.log("DB Conected")})


let data=new mongoose.Schema({
   name:String,
   email:String,
   password:String,
   amount:Number
 })
 
 let Data=mongoose.model("test",data)
 
//  let data1=new Data({
//      name:"Anisha",
//      email:"Anisha@gmail.com",
//      password:"206",
//      amount:1000000
//  })
//  data1.save()
 
  app.get('/data',(req,res)=>{Data.find().then((item)=>res.send(item))})
 
  app.post('/create',(req,res)=>{Data.create(req.body).then((item)=>res.send(item))})
 
//  // to fetch 
  app.get('/data',(req,res)=>{Data.find().then((item)=>res.send(item))})