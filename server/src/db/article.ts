import * as casual from 'casual';
import database from '../services/database';

export interface Article {
	id: number;
	title: string;
	thumb: string;
	content: string;
	authorId: number;
}

// generate sample data
const data = [...Array(20)].map((_, i) => {
	const imgId = casual.integer(1, 1080);
	const content = casual.sentences();

	return {
		id: i,
		excerpt: content.length > 50 ? `${content.substr(0, 50)}...` : content,
		content,
		thumb: `https://picsum.photos/200/200?image=${imgId}`,
		cover: `https://picsum.photos/1024/768?image=${imgId}`,
		title: casual.title,
		authorId: casual.integer(0, 4),
	};
});

export default database<Article>(data);
