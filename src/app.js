const express = require('express');
const express_graphql = require('express-graphql');

const courseSchema = require("./graphql/resources/courses/course.schema");
const courseResolvers = require("./graphql/resources/courses/course.resolvers");


const app = express();

app.use('/graphql', express_graphql({
    schema: courseSchema,
    rootValue: courseResolvers,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
