const express =require('express');
const router=express.Router();

router.post('/signup',(req,res)=>
{
    res.send("registered");
});

router.post('/login',(req,res)=>
    {
        res.send("successufully signed up");
    });
module.exports = router;
