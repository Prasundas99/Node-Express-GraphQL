
import express from 'express'

import loadStartModules from './setup/loadStartModules.js';
import setupGraphQL from './setup/graphql.js';
import { config } from "./config/config.js";

// Create express server
const app = express();

// Setup load modules
loadStartModules(app)

// Server Listen
app.listen(config.port, () => {
  console.log(config.serverRunningMsg);
})

// Setup GraphQL
setupGraphQL(app)



