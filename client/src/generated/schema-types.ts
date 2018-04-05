/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface ArticleViewQueryVariables {
  id: string,
};

export interface ArticleViewQuery {
  article:  {
    title: string,
    excerpt: string,
    cover: string,
    content: string | null,
    author:  {
      name: string,
    },
  } | null,
};

export interface HomeViewQuery {
  articleList:  Array< {
    id: string,
    title: string,
    excerpt: string,
    thumb: string,
    content: string | null,
    author:  {
      name: string,
    },
  } >,
};
