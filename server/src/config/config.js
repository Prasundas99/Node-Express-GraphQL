const PORT = process.env.PORT || 4000

export const config = {
    port: PORT,
    serverRunningMsg: `Server is listening on port ${PORT}`,
    graphqlendpoint: "/graphql",
    graphql: {
        ide: true,
        pretty: true,
    }
};