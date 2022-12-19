const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  //origin: "http://localhost:8081",

  origin: '*',
  /*origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,*/
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded


//app.use(express.urlencoded({ extended: true })); original
// simple route



app.get("/", (req, res) => {
  res.json({ message: "Welcome to my digimon application." });
});

require("./app/routes/digimon.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

/*
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function() {
    console.log("Server started.......");
})*/