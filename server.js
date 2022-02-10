const express =  require("express");
const {graphqlHTTP} = require("express-graphql");
const { 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,

 } = require("graphql");

const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name : "Helloworld",
        fields: () =>({
            message : { 
                type: GraphQLString,
                resolve: () => 'Hello world'
            }
        })
    })
    }
);


app.use('/graphql',graphqlHTTP({
    schema : schema,
    graphiql : true,
   
}));
app.listen(8080., ()=> console.log('Running on server port localhost:8080/graphql'))


// app.get('/server',(req,res) => {
//     res.send("Graphql is amazing"); 
// });

