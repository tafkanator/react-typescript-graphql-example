

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ArticleView
// ====================================================

export interface ArticleView_article_author {
  __typename: "Author";
  name: string;
}

export interface ArticleView_article {
  __typename: "Article";
  title: string;
  excerpt: string;
  cover: string;
  content: string;
  author: ArticleView_article_author;
}

export interface ArticleView {
  article: ArticleView_article | null;  // Returns article by id
}

export interface ArticleViewVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomeView
// ====================================================

export interface HomeView_articleList_author {
  __typename: "Author";
  name: string;
}

export interface HomeView_articleList {
  __typename: "Article";
  id: string;
  title: string;
  excerpt: string;
  thumb: string;
  content: string;
  author: HomeView_articleList_author;
}

export interface HomeView {
  articleList: HomeView_articleList[];  // Returns all articles
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================