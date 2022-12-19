module.exports = app => {
    const digimon = require("../controllers/digimon.controller.js");
    var router = require("express").Router();
    
    
    router.get("/name/:name", digimon.findName);
    router.get("/level/:level", digimon.findLevel);
    

    
    app.use('/api/digimon', router);
  };