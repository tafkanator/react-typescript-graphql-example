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
exports.default = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\ttype Author {\n\t\tid: ID!\n\t\tname: String!\n\t\tarticles: [Article]!\n\t}\n\n\textend type Query {\n\t\tauthor(id: ID!): Author\n\t}\n"], ["\n\ttype Author {\n\t\tid: ID!\n\t\tname: String!\n\t\tarticles: [Article]!\n\t}\n\n\textend type Query {\n\t\tauthor(id: ID!): Author\n\t}\n"])));
var templateObject_1;
//# sourceMappingURL=author-schema.js.map