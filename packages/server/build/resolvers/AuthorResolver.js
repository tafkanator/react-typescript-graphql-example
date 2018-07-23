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
import { Resolver, Query, Arg, Int, Mutation } from 'type-graphql';
import AuthorEntity from '../entities/AuthorEntity';
import AddAuthorInputType from './types/AddAuthorInputType';
let AuthorResolver = class AuthorResolver {
    author(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return AuthorEntity.findOne(id);
        });
    }
    createAuthor(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const author = AuthorEntity.create(input);
            return author.save();
        });
    }
};
__decorate([
    Query(() => AuthorEntity, { nullable: true, description: 'Returns author by id' }),
    __param(0, Arg('id', () => Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "author", null);
__decorate([
    Mutation(() => AuthorEntity, { description: 'Create new author' }),
    __param(0, Arg('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddAuthorInputType]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "createAuthor", null);
AuthorResolver = __decorate([
    Resolver()
], AuthorResolver);
export default AuthorResolver;
//# sourceMappingURL=AuthorResolver.js.map