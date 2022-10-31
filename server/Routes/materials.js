/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

const router = require("express").Router(); //any
var Material = require("../Models/material.model"); //any

//Create Material
router.route("/add").post((req, res) => {
    const name = req.body.name; //string
    const ref = req.body.ref; //string
    const forkedFromRef = req.body.forkedFromRef; //string
    const creatorUserName = req.body.creatorUserName; // string
    const published = req.body.published; //bool

    const coverImageSrc = req.body.coverImage.source; //string

    const description = req.body.details.description; //string
    const authors = req.body.details.authors; //Array<string>
    const license = req.body.details.license; //string
    const sources = req.body.details.sources; //Array<obj>    
    const difficulty = req.body.details.difficulty; //number
    const prepTime = req.body.details.prepTime; //number
    const tools = req.body.details.tools; //Array<obj>
    const processes = req.body.details.processes; //Array<obj>

    const physicalProperties = req.body.physicalProperties; //Array<obj>

    const newMaterial = new Material( //any
        { 
            name : name,
            ref : ref,
            forkedFromRef : forkedFromRef,
            creatorUserName : creatorUserName,
            published : published,

            coverImage : {
                source : coverImageSrc
            },
            details : {
                description : description,
                authors : authors,  
                license : license,
                sources : sources,
                difficulty : difficulty,
                prepTime : prepTime,
                tools : tools,
                processes : processes
            },
            physicalProperties : physicalProperties
        }
    );

    newMaterial.save()
        .then(() => { return res.json("Material added") })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read all materials
router.route("/").get((req, res) => {
    Material.find()
        .then((materials) => { return res.json(materials) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read material by ID
router.route("/:id").get((req, res) => {
    Material.findById(req.params.id)
        .then((material) => { return res.json(material) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read material by materialName
router.route("/findByName/:name").get((req, res) => {
    Material.find({ name : req.params.name })
        .then((material) => { return res.json(material) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read material by materialRef
router.route("/findByRef/:ref").get((req, res) => {
    Material.find({ ref : req.params.ref })
        .then((material) => { return res.json(material) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read material by materialCreatorUserName
router.route("/findByCreatorUserName/:creatorUserName").get((req, res) => {
    Material.find({ creatorUserName : req.params.creatorUserName })
        .then((material) => { return res.json(material) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Read material by materialAuthor
router.route("/findByAuthor/:author").get((req, res) => {
    Material.find({ "details.authors" : req.params.author })
        .then((material) => { return res.json(material) })
        .catch((err) => { return res.status(400).json("Error : " + err) });
});

//Update material by Ref
router.route("/update/:ref").post((req, res) => {
    const name = req.body.name; //string
    const ref = req.body.ref; //string
    const forkedFromRef = req.body.forkedFromRef; //string
    const creatorUserName = req.body.creatorUserName; // string
    const published = req.body.published; //bool

    const coverImageSrc = req.body.coverImage.source; //string
    const description = req.body.details.description; //string
    const authors = req.body.details.authors; //Array<string>
    const license = req.body.details.license; //string
    const sources = req.body.details.sources; //Array<string>
    const difficulty = req.body.details.difficulty; //number
    const prepTime = req.body.details.prepTime; //number
    const tools = req.body.details.tools; //Array<obj>
    const processes = req.body.details.processes; //Array<obj>

    const physicalProperties = req.body.physicalProperties; //Array<obj>

    const query = { ref : req.params.ref }; //obj
    const newMaterial = { //any
        name : name,
        ref : ref,
        forkedFromRef : forkedFromRef,
        creatorUserName : creatorUserName, 
        published : published,

        coverImage : {
            source : coverImageSrc
        },
        details : {
            description : description,
            authors : authors,            
            license : license,            
            sources : sources,            
            difficulty : difficulty,
            prepTime : prepTime,
            tools : tools,
            processes : processes
        },
        physicalProperties : physicalProperties
    };

    Material.findOneAndUpdate(query, newMaterial, (error, data) => {});
});

//Delete material by ref
router.route("/:ref").delete((req, res) => {
    Material.findOneAndDelete({ ref : req.params.ref }, (error, data) => {});
});

module.exports = router;