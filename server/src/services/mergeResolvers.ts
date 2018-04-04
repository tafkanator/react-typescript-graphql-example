import * as merge from 'deepmerge';
import { IResolvers } from 'graphql-tools';

export default (resolverPartials: object[]) => merge.all<IResolvers>(resolverPartials);
