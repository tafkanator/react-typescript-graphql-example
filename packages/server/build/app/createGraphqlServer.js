var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
export default function createGraphqlServer(app) {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = yield buildSchema({
            resolvers: [path.join(__dirname, '..', 'entities', '*.ts'), path.join(__dirname, '..', 'resolvers', '*.ts')],
        });
        const server = new ApolloServer({ schema });
        server.applyMiddleware({ app });
        return server;
    });
}
//# sourceMappingURL=createGraphqlServer.js.map