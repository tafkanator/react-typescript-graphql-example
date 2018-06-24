import ArticleEntity from '../../entities/ArticleEntity';
import AuthorEntity from '../../entities/AuthorEntity';

export default {
	Author: {
		articles: ({ id }: any) => ArticleEntity.find({ authorId: id }),
	},

	Query: {
		author: (_: any, { id }: any) => AuthorEntity.findOne(id),
	},
};
