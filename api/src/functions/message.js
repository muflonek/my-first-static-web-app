const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const connectionString = process.env.DATABASE_CONNECTION_STRING;
        context.log('Connection string:', connectionString);        
        return { body: JSON.stringify({ "text": `Hello, from the API!!X. Connection string: ${connectionString}` }) };
    }
});
