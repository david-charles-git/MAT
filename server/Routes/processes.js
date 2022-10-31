/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

const router = require("express").Router(); //any
const { Process } = require("../Models/process.model"); //any

//Create Process
router.route("/add").post((req, res) => {
    const name = req.body.name; //string
    const ref = req.body.ref; //string
    const description = req.body.description; //string
    const link = req.body.link; //string
    const newProcess = new Process( //any
        {
            name,
            ref,
            description,
            link
        }
    );

    newProcess.save()
        .then(() => { return res.json("Process added") })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read all processes
router.route("/").get((req, res) => {
    Process.find()
        .then((processes) => { return res.json(processes) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read process by ID
router.route("/:id").get((req, res) => {
    Process.findById(req.params.id)
        .then((process) => { return res.json(process) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read process by Search
router.route("/search/:search").get((req, res) => {
    const myQuery = { //obj
        name : req.params.search
    };  

    Process.find(myQuery)
        .then((process) => { return res.json(process) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read process by name
router.route("/findByName/:name").get((req, res) => {
    Process.find({ name : req.params.name })
        .then((Tool) => { return res.json(process) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read process by ref
router.route("/findByRef/:ref").get((req, res) => {
    Process.find({ ref : req.params.ref })
        .then((process) => { return res.json(process) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Update process by ref
router.route("/update/:ref").post((req, res) => {
    const newProcess = { //any
        name : req.body.name,
        ref : req.body.ref,
        description : req.body.description,
        link : req.body.link
    };

    Process.findOneAndUpdate({ ref : req.params.ref }, newProcess, (error, data) => {});
});

//Delete process by ID
router.route("/:id").delete((req, res) => {
    Process.findByIdAndDelete(req.params.id)
        .then(() => { return res.json("Process Deleted") })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

module.exports = router;