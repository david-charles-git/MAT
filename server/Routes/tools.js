/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

const router = require("express").Router(); //any
const { Tool } = require("../Models/tool.model"); //any

//Create Tool
router.route("/add").post((req, res) => {
    const name = req.body.name; //string
    const ref = req.body.ref; //string
    const description = req.body.description; //string
    const link = req.body.link; //string
    const newTool = new Tool( //any
        {
            name,
            ref,
            description,
            link
        }
    );

    newTool.save()
        .then(() => { return res.json("Tool added") })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read all tools
router.route("/").get((req, res) => {
    Tool.find()
        .then((tools) => { return res.json(tools) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read tool by ID
router.route("/:id").get((req, res) => {
    Tool.findById(req.params.id)
        .then((tool) => { return res.json(tool) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read tool by Search
router.route("/search/:search").get((req, res) => {
    const myQuery = { //obj
        name : req.params.search
    };  

    Tool.find(myQuery)
        .then((tool) => { return res.json(tool) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read tool by name
router.route("/findByName/:name").get((req, res) => {
    Tool.find({ name : req.params.name })
        .then((tool) => { return res.json(tool) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read tool by ref
router.route("/findByRef/:ref").get((req, res) => {
    Tool.find({ ref : req.params.ref })
        .then((tool) => { return res.json(tool) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Update tool by ref
router.route("/update/:ref").post((req, res) => {
    const newTool = { //any
        name : req.body.name,
        ref : req.body.ref,
        description : req.body.description,
        link : req.body.link
    };

    Tool.findOneAndUpdate({ ref : req.params.ref }, newTool, (error, data) => {});
});

//Delete tool by ID
router.route("/:id").delete((req, res) => {
    Tool.findByIdAndDelete(req.params.id)
        .then(() => { return res.json("Tool Deleted") })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

module.exports = router;