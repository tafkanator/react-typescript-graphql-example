import ArticleEntity from '../../entities/ArticleEntity';
import AuthorEntity from '../../entities/AuthorEntity';
export default {
    Author: {
        articles: ({ id }) => ArticleEntity.find({ authorId: id }),
    },
    Query: {
        author: (_, { id }) => AuthorEntity.findOne(id),
    },
};
