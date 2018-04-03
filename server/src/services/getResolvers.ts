import * as merge from 'deepmerge';
import { IResolvers } from 'graphql-tools';

export default (resolverPartials: object[]) => {
	// find the resolvers and merge them into a single object

	// return the root resolver
	return merge.all<IResolvers>(resolverPartials);
};
