import authorDb from '../../db/author';

export default {
	Query: {
		author: (_: any, { id }: any) => authorDb.findById(id),
	},
};
