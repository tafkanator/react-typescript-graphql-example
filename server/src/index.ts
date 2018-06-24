import 'reflect-metadata';
import express from 'express';
import createGraphqlServer from './app/createGraphqlServer';
import createDatabaseConnection from './app/createDatabaseConnection';

async function bootstrap() {
	const app = express();

	const [server] = await Promise.all([createGraphqlServer(app), createDatabaseConnection()]);

	app.listen({ port: 4000 }, () => {
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
	});
}

bootstrap();
