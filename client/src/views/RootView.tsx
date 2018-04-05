import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './root-view.css';

import HomeView from './home/HomeView';
import ArticleView from './article/ArticleView';

export default () => (
	<div className="root-view">
		<header className="root-view__header">
			<NavLink to="/" className="root-view__header__link">
				Bloog
			</NavLink>
		</header>
		<main className="root-view__main">
			<Route exact path="/" component={HomeView} />
			<Route path="/article/:id" component={ArticleView} />
		</main>
	</div>
);
