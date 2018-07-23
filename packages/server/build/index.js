var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import 'reflect-metadata';
import express from 'express';
import createGraphqlServer from './app/createGraphqlServer';
import createDatabaseConnection from './app/createDatabaseConnection';
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = express();
        const [server] = yield Promise.all([createGraphqlServer(app), createDatabaseConnection()]);
        app.listen({ port: 4000 }, () => {
            console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
        });
    });
}
bootstrap();
//# sourceMappingURL=index.js.map