"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var typeorm_1 = require("typeorm");
var apollo_server_express_1 = require("apollo-server-express");
var books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        authPor: 'Michael Crichton',
    },
];
var typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\ttype Book {\n\t\ttitle: String\n\t\tauthor: String\n\t}\n\n\ttype Query {\n\t\tbooks: [Book]\n\t}\n"], ["\n\ttype Book {\n\t\ttitle: String\n\t\tauthor: String\n\t}\n\n\ttype Query {\n\t\tbooks: [Book]\n\t}\n"])));
var resolvers = {
    Query: {
        books: function () { return books; },
    },
};
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance, e_1, app, server;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        instance = new this();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, instance.createDatabaseConnection()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        throw new Error(e_1);
                    case 4:
                        app = express_1.default();
                        server = new apollo_server_express_1.ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
                        server.applyMiddleware({ app: app });
                        app.listen({ port: 4000 }, function () {
                            console.log("\uD83D\uDE80  Server ready at http://localhost:4000");
                        });
                        return [2 /*return*/, this];
                }
            });
        });
    };
    Server.prototype.createDatabaseConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, typeorm_1.createConnection({
                        type: 'sqlite',
                        database: 'database.sqlite',
                        synchronize: true,
                        logging: process.env.NODE_ENV === 'development',
                        entities: [path_1.default.join(__dirname, '..', 'entities', '*.+(ts|js)')],
                    })];
            });
        });
    };
    return Server;
}());
exports.Server = Server;
var templateObject_1;
//# sourceMappingURL=Server.js.map