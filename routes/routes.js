const express = require('express');
const router = express.Router();

const HomeController = require("../controller/HomeController");
const ItemsController =  require("../controller/ItemsController");

router.get("/", HomeController.getAllItems);
router.get("/Check/:id", HomeController.updateCheck);
router.post("/Quarto", ItemsController.creatItemQuarto);
router.post("/Cozinha", ItemsController.creatItemCozinha);
router.post("/Lavanderia", ItemsController.creatItemLavanderia);
router.post("/Banheiro", ItemsController.creatItemBanheiro);
router.delete('/Delete/:id', HomeController.deleteItem);


module.exports = router;