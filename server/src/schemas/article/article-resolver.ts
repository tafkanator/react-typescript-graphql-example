import articleDb, { Article } from '../../db/article';
import authorDb from '../../db/author';

export default {
	Article: {
		author: ({ authorId }: Article) => authorDb.findById(authorId),
	},

	Query: {
		article: (_: any, { id }: any) => articleDb.findById(id),
		articleList: articleDb.findAll,
	},
};
