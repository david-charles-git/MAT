/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

const router = require("express").Router(); //any
var User = require("../Models/user.model"); //any

//Create User
router.route("/add").post((req, res) => {
    const userName = req.body.userName; //string
    const firstName = req.body.firstName; //string
    const lastName = req.body.lastName; //string
    const newUser = new User( //any
        {
            userName,
            firstName,
            lastName
        }
    );

    newUser.save()
        .then(() => { return res.json("User added") })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read all users
router.route("/").get((req, res) => {
    User.find()
        .then((users) => { return res.json(users) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read user by ID
router.route("/:id").get((req, res) => {
    User.findById(req.params.id)
        .then((user) => { return res.json(user) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read user by Search
router.route("/search/:search").get((req, res) => {
    const myQuery = { //obj
        userName : req.params.search
    };  

    User.find(myQuery)
        .then((user) => { return res.json(user) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read user by userName
router.route("/findByUserName/:userName").get((req, res) => {
    User.find({ userName : req.params.userName })
        .then((user) => { return res.json(user) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read user by firstName
router.route("/findByFirstName/:firstName").get((req, res) => {
    User.find({ firstName : req.params.firstName })
        .then((user) => { return res.json(user) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read user by lastName
router.route("/findByLastName/:lastName").get((req, res) => {
    User.find({ lastName : req.params.lastName })
        .then((user) => { return res.json(user) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Update user by Username
router.route("/update/:userName").post((req, res) => {
    const newUser = { //any
        userName : req.body.userName,
        firstName : req.body.firstName,
        lastName : req.body.lastName
    };

    User.findOneAndUpdate({ userName : req.params.userName }, newUser, (error, data) => {});
});

//Delete user by ID
router.route("/:id").delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => { return res.json("User Deleted") })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

module.exports = router;