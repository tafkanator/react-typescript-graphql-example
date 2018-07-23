var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ObjectType, Field, ID } from 'type-graphql';
let Recipe = class Recipe {
};
__decorate([
    Field(type => ID),
    __metadata("design:type", String)
], Recipe.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], Recipe.prototype, "title", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", Number)
], Recipe.prototype, "averageRating", void 0);
Recipe = __decorate([
    ObjectType()
], Recipe);
export default Recipe;
