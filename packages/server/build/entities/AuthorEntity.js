var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import ArticleEntity from './ArticleEntity';
let AuthorEntity = class AuthorEntity extends BaseEntity {
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AuthorEntity.prototype, "id", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], AuthorEntity.prototype, "name", void 0);
__decorate([
    Field(() => ArticleEntity),
    OneToMany(() => ArticleEntity, article => article.author, { lazy: true }),
    __metadata("design:type", Object)
], AuthorEntity.prototype, "article", void 0);
AuthorEntity = __decorate([
    Entity('authors'),
    ObjectType('Author')
], AuthorEntity);
export default AuthorEntity;
// // generate sample data
// const data: Author[] = [...Array(5)].map((_, i) => ({
// 	id: i,
// 	name: casual.full_name,
// }));
//# sourceMappingURL=AuthorEntity.js.map