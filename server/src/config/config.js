const PORT = process.env.PORT || 3000

export const config = {
    port: PORT,
    serverRunningMsg: `Server is listening on port ${PORT}`,
    graphqlendpoint: "/graphql",
    graphql: {
        ide: true,
        tracing: true,
        cacheControl: true,
        playground: true,
        introspection: true,
        pretty: true,
    }
};