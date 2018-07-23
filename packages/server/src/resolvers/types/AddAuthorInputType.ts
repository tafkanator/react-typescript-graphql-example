import { Field, InputType } from 'type-graphql';
import AuthorEntity from '../../entities/AuthorEntity';

@InputType({ description: 'New author data' })
export default class AddAuthorInputType implements Partial<AuthorEntity> {
	@Field() public name!: string;
}
