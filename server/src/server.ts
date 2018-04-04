import * as koa from 'koa';
import * as koaRouter from 'koa-router';
import * as koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import { makeExecutableSchema } from 'graphql-tools';
import { schemas, resolvers } from './api';
import mergeTypeDefs from './services/mergeTypeDefs';
import mergeResolvers from './services/mergeResolvers';

const options = {
	port: 3000,
	endpointUrl: '/',
	useGraphiql: true,
};

const app = new koa();
const router = new koaRouter();

const schema = makeExecutableSchema({
	typeDefs: mergeTypeDefs(schemas),
	resolvers: mergeResolvers(resolvers),

});

router.post(options.endpointUrl, koaBody(), graphqlKoa({ schema }));
router.get(options.endpointUrl, graphqlKoa({ schema }));

if (options.useGraphiql) {
	router.get('/graphiql', graphiqlKoa({ endpointURL: options.endpointUrl }));
}

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(options.port);
