import {graphqlHTTP} from 'express-graphql'
import schema from '../schema/schema.js'
import { config } from '../config/config.js'

export default function GraphQlServer(server) {
  console.info('SETUP - Loading GraphQl Server...')

  server.use(
    config.graphqlendpoint,
    graphqlHTTP(() => ({
      schema,
      graphiql: true,
      //pretty: true,
    }))
  )

  console.info('Graphql SETUP COMPLETED...')
}
