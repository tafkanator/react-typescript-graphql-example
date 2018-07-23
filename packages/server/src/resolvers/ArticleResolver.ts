import { UserInputError } from 'apollo-server';
import { Arg, ID, Mutation, Query, Resolver } from 'type-graphql';
import ArticleEntity from '../entities/ArticleEntity';
import AuthorEntity from '../entities/AuthorEntity';
import AddArticleInputType from './types/AddArticleInputType';

@Resolver()
export default class ArticleResolver {
	@Query(() => ArticleEntity, { nullable: true, description: 'Returns article by id' })
	public async article(
		@Arg('id', () => ID)
		id: number,
	): Promise<ArticleEntity | undefined> {
		return ArticleEntity.findOne(id);
	}

	@Query(() => [ArticleEntity], { description: 'Returns all articles' })
	public async articleList(): Promise<ArticleEntity[]> {
		return ArticleEntity.find();
	}

	@Mutation(() => ArticleEntity, { description: 'Create new article' })
	public async createArticle(@Arg('input') input: AddArticleInputType): Promise<ArticleEntity> {
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
