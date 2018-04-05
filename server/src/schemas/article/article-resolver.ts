import articleDb from '../../db/article';

export default {
	Query: {
		article: (_: any, { id }: any) => articleDb.findById(id),
		articleList: articleDb.findAll,
	},
};
