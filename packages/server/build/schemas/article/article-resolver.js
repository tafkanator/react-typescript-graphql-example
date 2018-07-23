"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AuthorEntity_1 = __importDefault(require("../../entities/AuthorEntity"));
var ArticleEntity_1 = __importDefault(require("../../entities/ArticleEntity"));
exports.default = {
    Article: {
        author: function (_a) {
            var authorId = _a.authorId;
            return AuthorEntity_1.default.findOne(authorId);
        },
    },
    Query: {
        article: function (_, _a) {
            var id = _a.id;
            return ArticleEntity_1.default.findOne(parseInt(id));
        },
        articleList: ArticleEntity_1.default.find,
    },
};
//# sourceMappingURL=article-resolver.js.map