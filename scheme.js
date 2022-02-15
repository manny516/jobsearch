const { 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,

 } = require("graphql");

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name : "Hello world",
        fields: () =>({
            message : { 
                type: GraphQLString,
                resolve: () => 'Hello world'
            }
        })
    })
    }
);
