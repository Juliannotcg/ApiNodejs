const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: "API de produtos com Node",
            version: "1.0.0",
            description: "API RestFull com"
          },
          basePath: "/",
    },
    apis: ['../src/routes.js']
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}