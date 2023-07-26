const { Quarto, Cozinha, Lavanderia, Banheiro } = require('../model/Items');

const creatItemQuarto = async (req,res)=>{
    const item=req.body;
    
    if(!item.item){
        return res.redirect("/");
    }
    try{
        await Quarto.create(item);
        return res.redirect("/#quarto");
    }
    catch(err){
        res.status(500).send({error: err.message});
    }
    
};
const creatItemCozinha = async (req,res)=>{
    const item=req.body;
    
    if(!item.item){
        return res.redirect("/");
    }
    try{
        await Cozinha.create(item);
        return res.redirect("/#cozinha");
    }
    catch(err){
        res.status(500).send({error: err.message});
    }
    
};
const creatItemLavanderia = async (req,res)=>{
    const item=req.body;
    
    if(!item.item){
        return res.redirect("/");
    }
    try{
        await Lavanderia.create(item);
        return res.redirect("/#lavanderia");
    }
    catch(err){
        res.status(500).send({error: err.message});
    }
    
};
const creatItemBanheiro = async (req,res)=>{
    const item=req.body;
    
    if(!item.item){
        return res.redirect("/");
    }
    try{
        await Banheiro.create(item);
        return res.redirect("/#banheiro");
    }
    catch(err){
        res.status(500).send({error: err.message});
    }
    
};

module.exports = {
    creatItemQuarto,
    creatItemCozinha,
    creatItemLavanderia,
    creatItemBanheiro,
};