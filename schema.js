const axios = require('axios');
const { 
    GraphQLObjectType, 
    GraphQLInt,
    GraphQLString, 
    GraphQLBoolean,
    GraphQLList
} = require("graphql");

const JobInfo = new GraphQLObjectType({
    name: 'JobInfo',
    fields: ()=>({
        id : { type : GraphQLInt },
        company : { type : GraphQLString },
        position : { type : GraphQLString }, 
        location : { type : GraphQLString },
        view_count : {type : GraphQLInt},
        time_posted : {type : GraphQLString} ,
        applied_count : {type : GraphQLInt},
        bookmark : {type : GraphQLBoolean} ,
        team_type : {type : GraphQLString},
        salary : {type : GraphQLString},
        min_qual : {type : GraphQLString},
        prefer_qual : {type : GraphQLString},
        description : {type : GraphQLString}

    })
});


const RootQuery = new GraphQLObjectType({

    name : 'RootQuery',
    fields : {
        jobinfo : {
            type : new GraphQLList(JobInfoType),
            resolve(parent,args){
                return axios.get();
            }
        }
    }


})