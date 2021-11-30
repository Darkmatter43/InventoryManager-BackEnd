const express = require('express')
const router=express.Router()
const Item = require('../models/inventory.js')

router.get('/',(req,res)=>{
    Item.find({},(err,foundItem)=>{
        res.json(foundItem)
    })
})

router.post('/',(req,res)=>{
    Item.create(req.body,(err,createdItem)=>{
        res.json(createdItem)
    })
})

router.delete('/:id',(req,res)=>{
    Item.findByIdAndRemove(req.params.id,(err,deletedItem)=>{
        res.json(deletedItem)
    })
})

router.put('/:id',(req,res)=>{
    Item.findByIdAndUpdate(req.params.id,{name:req.body.name, description:req.body.description,qty:req.body.qty, },{new:true},(err,updatedItem)=>{
        res.json(updatedItem)
    })
})

module.exports=router