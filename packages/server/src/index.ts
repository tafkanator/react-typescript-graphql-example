import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import createDatabaseConnection from './app/createDatabaseConnection';
import createGraphqlServer from './app/createGraphqlServer';

const whitelist = ['http://localhost:3000'];

async function bootstrap() {
	const app = express();

	const [server] = await Promise.all([createGraphqlServer(app), createDatabaseConnection()]);

	app.options(
		'*',
		cors({
			credentials: true,
			origin: (origin, callback) =>
				whitelist.indexOf(origin) !== -1 ? callback(null, true) : callback(new Error('Not allowed by CORS')),
		}),
	);

	app.listen({ port: 4000 }, () => {
		// tslint:disable-next-line:no-console
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
	});
}

bootstrap();
