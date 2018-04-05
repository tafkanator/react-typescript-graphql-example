import authorDb, { Author } from '../../db/author';
import articleDb from '../../db/article';

export default {
	Author: {
		articles: ({ id }: Author) => articleDb.findWhere('authorId', id),
	},

	Query: {
		author: (_: any, { id }: any) => authorDb.findById(id),
	},
};
