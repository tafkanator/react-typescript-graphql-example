var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { Resolver, Query, Arg, Int, Mutation } from 'type-graphql';
import { UserInputError } from 'apollo-server';
import AddArticleInputType from './types/AddArticleInputType';
import ArticleEntity from '../entities/ArticleEntity';
import AuthorEntity from '../entities/AuthorEntity';
let ArticleResolver = class ArticleResolver {
    article(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return ArticleEntity.findOne(id);
        });
    }
    articleList() {
        return __awaiter(this, void 0, void 0, function* () {
            return ArticleEntity.find();
        });
    }
    createArticle(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { authorId } = input, articleFields = __rest(input, ["authorId"]);
            const author = yield AuthorEntity.findOne(authorId);
            if (!author) {
                throw new UserInputError(`Cannot create article.`, {
                    invalidArgs: [{ authorId: `Author with id ${input.authorId} does not exist` }],
                });
            }
            const article = ArticleEntity.create(Object.assign({}, articleFields, { author }));
            return article.save();
        });
    }
};
__decorate([
    Query(() => ArticleEntity, { nullable: true, description: 'Returns artilcle by id' }),
    __param(0, Arg('id', () => Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "article", null);
__decorate([
    Query(() => [ArticleEntity], { description: 'Returns all articles' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "articleList", null);
__decorate([
    Mutation(() => ArticleEntity, { description: 'Create new article' }),
    __param(0, Arg('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddArticleInputType]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "createArticle", null);
ArticleResolver = __decorate([
    Resolver()
], ArticleResolver);
export default ArticleResolver;
//# sourceMappingURL=ArticleResolver.js.map