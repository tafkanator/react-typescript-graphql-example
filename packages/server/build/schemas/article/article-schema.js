"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.default = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\ttype Article {\n\t\tid: ID!\n\t\ttitle: String!\n\t\tthumb: String!\n\t\tcover: String!\n\t\tcontent: String\n\t\texcerpt: String!\n\t\tauthor: Author!\n\t}\n\n\textend type Query {\n\t\tarticle(id: ID!): Article\n\t\tarticleList: [Article!]!\n\t}\n"], ["\n\ttype Article {\n\t\tid: ID!\n\t\ttitle: String!\n\t\tthumb: String!\n\t\tcover: String!\n\t\tcontent: String\n\t\texcerpt: String!\n\t\tauthor: Author!\n\t}\n\n\textend type Query {\n\t\tarticle(id: ID!): Article\n\t\tarticleList: [Article!]!\n\t}\n"])));
var templateObject_1;
//# sourceMappingURL=article-schema.js.map