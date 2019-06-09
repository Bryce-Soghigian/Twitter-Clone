import express from 'express';
import bodyParser from 'body-parser';
import {graphiqlExpress, graphqlExpress} from 'apollo-server-express'
import {makeExecutableSchema } from 'graphql-tools';
import typeDefs from './graphql/Schema'
import resolvers from './graphql/resolvers';
import constants from './config/constants';


import './config/db'
const app = express();
const schema = makeExecutableSchema ({
    typeDefs,
    resolvers
})


app.use(bodyParser.json());


app.use('/graphiql',graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH
}));

app.listen(constants.PORT, err =>{
    if(err){
        console.error(err);
    }else{
        console.log(`App listen to port: ${PORT}`);
    }
});
