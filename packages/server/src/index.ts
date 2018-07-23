import express from 'express';
import 'reflect-metadata';
import createDatabaseConnection from './app/createDatabaseConnection';
import createGraphqlServer from './app/createGraphqlServer';

async function bootstrap() {
	const app = express();

	const [server] = await Promise.all([createGraphqlServer(app), createDatabaseConnection()]);

	app.listen({ port: 4000 }, () => {
		// tslint:disable-next-line:no-console
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
	});
}

bootstrap();
