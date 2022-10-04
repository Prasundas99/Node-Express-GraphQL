
import express from 'express'
import mongodbConnection from './config/db.js'
import loadStartModules from './setup/loadStartModules.js';
import setupGraphQL from './setup/graphql.js';
import { config } from "./config/config.js";

// Create express server
const app = express();

// Mongodb connection
mongodbConnection()

// Setup load modules
loadStartModules(app)

// Setup GraphQL
setupGraphQL(app)

// Server Listen
app.listen(config.port, () => {
  console.log(config.serverRunningMsg);
})



