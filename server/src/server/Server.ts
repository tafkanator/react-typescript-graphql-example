import 'reflect-metadata';
import * as path from 'path';

import { createConnection } from 'typeorm';
// import * as koa from 'koa';
// import * as cors from 'kcors';
// import * as koaRouter from 'koa-router';
// import * as koaBody from 'koa-bodyparser';
// import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
// import { makeExecutableSchema } from 'graphql-tools';
// import { schemas, resolvers } from './schemas';
// import mergeTypeDefs from './services/mergeTypeDefs';
// import mergeResolvers from './services/mergeResolvers';

export default class Server {
	private constructor() {}

	public static async create() {
		const server = new this();

		try {
			await server.createDatabaseConnection();
		} catch (e) {
			throw new Error(e);
		}

		return this;
	}

	private async createDatabaseConnection() {
		return createConnection({
			type: 'sqlite',
			database: 'database.sqlite',
			synchronize: true,
			logging: process.env.NODE_ENV === 'development',
			entities: [path.join(__dirname, '..', 'entities', '*.+(ts|js)')],
		});
	}
}

// const options = {
// 	port: 3001,
// 	endpointUrl: '/graphql',
// 	useGraphiql: true,
// };

// const app = new koa();
// app.use(cors());

// const router = new koaRouter();

// const schema = makeExecutableSchema({
// 	typeDefs: mergeTypeDefs(schemas),
// 	resolvers: mergeResolvers(resolvers),
// });

// router.post(options.endpointUrl, koaBody(), graphqlKoa({ schema }));
// router.get(options.endpointUrl, graphqlKoa({ schema }));

// if (options.useGraphiql) {
// 	router.get('/graphiql', graphiqlKoa({ endpointURL: options.endpointUrl }));
// }
// app.use(router.routes());
// app.use(router.allowedMethods());
// app.listen(options.port);
