const express =  require("express");
const {graphqlHTTP} = require("express-graphql");
const cors = require("cors");
const fs = require('fs');
const path = require('path');
const schema = require("./schema");

const app = express();


const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.use(cors());
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql : true
}))

app.get("/api/jobsearch",cors(corsOptions),(req,res) =>{
    let rawData = fs.readFileSync(path.resolve(__dirname,'jobsearch.json'));
    let jsonParse = JSON.parse(rawData);
    res.send(jsonParse);

})

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> console.log(`Running on server port : ${PORT}`))
