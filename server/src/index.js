/*
import express from 'express'

import loadStartModules from './setup/loadStartModules.js';
import setupGraphQL from './setup/graphql.js';
import { config } from "./config/config.js";

// Create express server
const app = express();

// Setup load modules
loadStartModules(app)

// Setup GraphQL
setupGraphQL(app)

// Server Listen
app.listen(config.port, () => {
  console.log(config.serverRunningMsg);
})
*/

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { default: schema } = require('./schema/schema');
 
const app = express();
 
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);
 
app.listen(4000);