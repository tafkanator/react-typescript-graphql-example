import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { ArticleViewQuery } from '../../generated/schema-types';
import './article-view.css';

interface IQueryProps {
	id: string;
}
interface IProps extends RouteComponentProps<IQueryProps> {}

const ARTICLE_VIEW_QUERY = gql`
	query ArticleView($id: ID!) {
		article(id: $id) {
			title
			excerpt
			cover
			content
			author {
				name
			}
		}
	}
`;

class ViewQuery extends Query<ArticleViewQuery, IQueryProps> {}

export default (props: IProps) => (
	<article className="article-view">
		<ViewQuery query={ARTICLE_VIEW_QUERY} variables={{ id: props.match.params.id }}>
			{({ data }) =>
				data && data.article ? (
					<div className="view">
						<h2 className="article-view__title">{data.article.title}</h2>
						<img className="article-view__thumb" src={data.article.cover} alt={data.article.title} />

						<p className="article-view__content">{data.article.content}</p>
						<p className="article-view__prefix">{data.article.author.name}</p>

						<Link to="/" className="article-view__footer-link">
							Back to list view
						</Link>
					</div>
				) : (
					<p>Loading</p>
				)
			}
		</ViewQuery>
	</article>
);
