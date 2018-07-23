"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// article
var article_schema_1 = __importDefault(require("./article/article-schema"));
var article_resolver_1 = __importDefault(require("./article/article-resolver"));
// author
var author_schema_1 = __importDefault(require("./author/author-schema"));
var author_resolver_1 = __importDefault(require("./author/author-resolver"));
// schemas
exports.schemas = [article_schema_1.default, author_schema_1.default];
// resolvers
exports.resolvers = [article_resolver_1.default, author_resolver_1.default];
//# sourceMappingURL=index.js.map