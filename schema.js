const axios = require('axios');
const { 
    GraphQLObjectType, 
    GraphQLInt,
    GraphQLString, 
    GraphQLBoolean,
    GraphQLList,
    GraphQLID,
    GraphQLSchema
} = require("graphql");

const JobInfo = new GraphQLObjectType({
    name: 'Jobquery',
    fields: ()=>({
        id : { type : GraphQLID },
        company : { type : GraphQLString },
        position : { type : GraphQLString }, 
        location : { type : GraphQLString },
        view_count : {type : GraphQLInt},
        time_posted : {type : GraphQLString} ,
        applied_count : {type : GraphQLInt},
        bookmark : {type : GraphQLBoolean} ,
        team_type : {type : GraphQLString},
        salary : {type : GraphQLString},
        min_qual : {type : new GraphQLList(GraphQLString)},
        prefer_qual : {type : new GraphQLList(GraphQLString)},
        description : {type : GraphQLString}
    })

});

const RootQuery = new GraphQLObjectType({

    name : 'RootQuery',
    fields : {
        job : {
            type : new GraphQLList(JobInfo),
            resolve(parent,args){
                return axios.get('http://localhost:4000/api/jobsearch')
                .then(res => res.data);
            }
        }
    }

});

module.exports = new GraphQLSchema({
    query : RootQuery
})