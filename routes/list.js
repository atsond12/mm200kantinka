const express = require('express');
const router = express.Router();
const database = require("../modules/db");
const db = new database();

router.post("/", function (req, res, next) {
    const name = req.body.name;
    const userID = req.body.userID
    const list = db.addList(name, userID);

    console.log(name,userID,list)
    res.status(200).send(JSON.stringify(list));
});

router.get("/:id", (req, res, next) => {
    const name = req.body.name;
    const list = db.getList(listID);

    if(list){
        res.status(200).send(JSON.stringify(list)).end()
    } else{
        res.status(404).end()
    }

});

router.get("/user/:userId", (req,res,next)=>{
    const userId = req.params.userId;
    const lists = db.getListsBelongingToUser(userId);
    res.status(200).send(JSON.stringify(lists)).end()
})

router.put("/:id", (req, res, next) => {

    const listID = req.params.id;
    const name = req.body.name;
    const items = req.body.items;
    const userID = req.body.userId;
    const updateList = db.updateList(listID, name, userID, items);
    res.status(200).send(JSON.stringify(updateList));

    //
    //db.updateList(listID, name, items);
});

router.delete("/:id", (req, res, next) => {
    const listID = req.params.id;
    const list = db.deleteList(listID);
    res.status(200).send(JSON.stringify(list));
    //db.deleteList(listID);
});


module.exports = router;