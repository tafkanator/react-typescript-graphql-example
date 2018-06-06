import AuthorEntity from 'entities/AuthorEntity';
import ArticleEntity from 'entities/ArticleEntity';

export default {
	Article: {
		author: ({ authorId }: any) => AuthorEntity.findOne(authorId),
	},

	Query: {
		article: (_: any, { id }: any) => ArticleEntity.findOne(parseInt(id)),
		articleList: ArticleEntity.find,
	},
};
