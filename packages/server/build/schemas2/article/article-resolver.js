import AuthorEntity from '../../entities/AuthorEntity';
import ArticleEntity from '../../entities/ArticleEntity';
export default {
    Article: {
        author: ({ authorId }) => AuthorEntity.findOne(authorId),
    },
    Query: {
        article: (_, { id }) => ArticleEntity.findOne(parseInt(id)),
        articleList: ArticleEntity.find,
    },
};
