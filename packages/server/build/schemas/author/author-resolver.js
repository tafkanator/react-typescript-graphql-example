"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ArticleEntity_1 = __importDefault(require("../../entities/ArticleEntity"));
var AuthorEntity_1 = __importDefault(require("../../entities/AuthorEntity"));
exports.default = {
    Author: {
        articles: function (_a) {
            var id = _a.id;
            return ArticleEntity_1.default.find({ authorId: id });
        },
    },
    Query: {
        author: function (_, _a) {
            var id = _a.id;
            return AuthorEntity_1.default.findOne(id);
        },
    },
};
//# sourceMappingURL=author-resolver.js.map