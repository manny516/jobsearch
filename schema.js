const { GraphQLObjectType} = require("graphql");

const JobInfo = new GraphQLObjectType({
    name: 'JobInfo',

    fields: ()=>({

    });
})

// const schema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name : "Hello world",
//         fields: () =>({
//             message : { 
//                 type: GraphQLString,
//                 resolve: () => 'Hello world'
//             }
//         })
//     })
//     }
// );
