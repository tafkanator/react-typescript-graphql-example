// article
import articleSchema from './article/article-schema';
import articleResolver from './article/article-resolver';

// author
import authorSchema from './author/author-schema';
import authorResolver from './author/author-resolver';

// schemas
export const schemas = [articleSchema, authorSchema];

// resolvers
export const resolvers = [articleResolver, authorResolver];
