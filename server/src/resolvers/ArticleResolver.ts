import { Resolver, Query, Arg, ID, Mutation } from 'type-graphql';
import { UserInputError } from 'apollo-server';
import AddArticleInputType from './types/AddArticleInputType';
import ArticleEntity from '../entities/ArticleEntity';
import AuthorEntity from '../entities/AuthorEntity';

@Resolver()
export default class ArticleResolver {
	@Query(() => ArticleEntity, { nullable: true, description: 'Returns artilcle by id' })
	async article(
		@Arg('id', () => ID)
		id: number,
	): Promise<ArticleEntity | undefined> {
		return ArticleEntity.findOne(id);
	}

	@Query(() => [ArticleEntity], { description: 'Returns all articles' })
	async articleList(): Promise<ArticleEntity[]> {
		return ArticleEntity.find();
	}

	@Mutation(() => ArticleEntity, { description: 'Create new article' })
	async createArticle(@Arg('input') input: AddArticleInputType): Promise<ArticleEntity> {
		const { authorId, ...articleFields } = input;
		const author = await AuthorEntity.findOne(authorId);

		if (!author) {
			throw new UserInputError(`Cannot create article.`, {
				invalidArgs: [{ authorId: `Author with id ${input.authorId} does not exist` }],
			});
		}

		const article = ArticleEntity.create({ ...articleFields, author });

		return article.save();
	}
}
