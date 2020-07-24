const express = require('express');
const routes = express.Router();
const Users = require('./../../config/Model/user')

routes.get('/',async(req,res)=>{
    const users = await Users.find({})
    res.send({message:users});
})

routes.get('/:id',async(req,res)=>{
    const userOne = await Users.findOne({_id:req.params.id});
    res.send({message:userOne});
})


routes.put("/update/:id",async (req,res)=>{

    await Users.findByIdAndUpdate({_id:req.body.id},
        {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
    })
    .then(()=>{
        res.send({message:"user updated successfully"})
    })
    .catch((err)=>{
        console.log("some went wrong")
    })
 })



 routes.delete("/delete/:id",async (req,res)=>{
    await Users.findByIdAndDelete({_id:req.body.id})
    .then(()=>{
        res.send({message:"user delete successfully"})
    })
    .catch((err)=>{
        console.log("some went wrong")
    })
 })



routes.post("/post",(req,res)=>{
    const user = new Users(req.body)
    user.save()
    .then(()=>{
        res.send({message:"user successfully added"})
    })
    .catch((err)=>{
        res.send({message:err.message})
    })
    console.log("Post===>",req.body)
})


module.exports = routes

