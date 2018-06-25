/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface ArticleViewQueryVariables {
  id: string,
};

export interface ArticleViewQuery {
  // Returns artilcle by id
  article:  {
    title: string,
    excerpt: string,
    cover: string,
    content: string,
    author:  {
      name: string,
    },
  } | null,
};

export interface HomeViewQuery {
  // Returns all articles
  articleList:  Array< {
    id: string,
    title: string,
    excerpt: string,
    thumb: string,
    content: string,
    author:  {
      name: string,
    },
  } >,
};
