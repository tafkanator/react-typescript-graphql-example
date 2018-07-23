var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Field, ObjectType, ID } from 'type-graphql';
import AuthorEntity from './AuthorEntity';
let ArticleEntity = class ArticleEntity extends BaseEntity {
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "id", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], ArticleEntity.prototype, "title", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], ArticleEntity.prototype, "thumb", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], ArticleEntity.prototype, "content", void 0);
__decorate([
    Field(() => AuthorEntity),
    ManyToOne(() => AuthorEntity, { lazy: true }),
    __metadata("design:type", Object)
], ArticleEntity.prototype, "author", void 0);
ArticleEntity = __decorate([
    Entity('articles'),
    ObjectType('Article')
], ArticleEntity);
export default ArticleEntity;
// generate sample data
// const data = [...Array(20)].map((_, i) => {
// 	const imgId = casual.integer(1, 1080);
// 	const content = casual.sentences();
// 	return {
// 		id: i,
// 		excerpt: content.length > 50 ? `${content.substr(0, 50)}...` : content,
// 		content,
// 		thumb: `https://picsum.photos/200/200?image=${imgId}`,
// 		cover: `https://picsum.photos/1024/768?image=${imgId}`,
// 		title: casual.title,
// 		authorId: casual.integer(0, 4),
// 	};
// });
//# sourceMappingURL=ArticleEntity.js.map