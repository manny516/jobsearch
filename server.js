const express =  require("express");
const {graphqlHTTP} = require("express-graphql");
const fs = require('fs');
const path = require('path');
// const schema = require("./schema");

const app = express();

// app.use("/graphql", graphqlHTTP({
//     schema,
//     graphiql : true
// }))

app.get("/api/jobsearch",(req,res) =>{
    let rawData = fs.readFileSync(path.resolve(__dirname,'jobsearch.json'));
    let jsonParse = JSON.parse(rawData);
    res.send(jsonParse);

})

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> console.log(`Running on server port : ${PORT}`))
