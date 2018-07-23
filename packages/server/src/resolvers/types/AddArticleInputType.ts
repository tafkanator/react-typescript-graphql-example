import { Field, InputType } from 'type-graphql';
import ArticleEntity from '../../entities/ArticleEntity';

@InputType({ description: 'New article data' })
export default class AddArticleInputType implements Partial<ArticleEntity> {
	@Field() public title!: string;

	@Field() public thumb!: string;

	@Field() public content!: string;

	@Field() public authorId!: string;
}
