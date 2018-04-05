import * as React from 'react';
import { Link } from 'react-router-dom';
import './home-view.css';

export default () => (
	<div className="view home-view">
		<article className="home-view__article">
			<Link to="/article/1" className="home-view__article__thumb">
				<img src="https://picsum.photos/200/200?image=1018" alt="Tere 123" />
			</Link>
			<p className="home-view__article__prefix">Igor Viigor</p>
			<h2 className="home-view__article__title">Tere 123</h2>
			<p className="home-view__article__content">Lorem ipsum</p>

			<Link to="/article/1" className="home-view__article__link">
				Read more
			</Link>
		</article>

		<article className="home-view__article">
			<Link to="/article/1" className="home-view__article__thumb">
				<img src="https://picsum.photos/200/200?image=1018" alt="Tere 123" />
			</Link>
			<p className="home-view__article__prefix">Igor Viigor</p>
			<h2 className="home-view__article__title">Tere 123</h2>
			<p className="home-view__article__content">Lorem ipsum</p>

			<Link to="/article/1" className="home-view__article__link">
				Read more
			</Link>
		</article>
	</div>
);
