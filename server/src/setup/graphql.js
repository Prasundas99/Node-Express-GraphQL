import graphqlHTTP from 'express-graphql'
import schema from '../schema/schema.js'
import { config } from '../config/config.js'

export default function GraphQlServer(server) {
  console.info('SETUP - Loading GraphQl Server...')

  server.use(
    config.graphqlendpoint,
    graphqlHTTP(() => ({
      schema,
      graphiql: config.graphql.ide,
      tracing: config.graphql.tracing,
      cacheControl: config.graphql.cacheControl,
      playground: config.graphql.playground
    }))
  )

  console.info('Graphql SETUP COMPLETED...')
}
