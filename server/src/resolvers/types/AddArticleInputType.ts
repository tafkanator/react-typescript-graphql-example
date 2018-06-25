import { InputType, Field } from 'type-graphql';
import ArticleEntity from '../../entities/ArticleEntity';

@InputType({ description: 'New article data' })
export default class AddArticleInputType implements Partial<ArticleEntity> {
	@Field() title!: string;

	@Field() thumb!: string;

	@Field() content!: string;

	@Field() authorId!: string;
}
