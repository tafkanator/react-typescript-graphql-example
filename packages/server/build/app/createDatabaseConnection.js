var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import path from 'path';
import { createConnection } from 'typeorm';
export default function createDatabaseConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        return createConnection({
            type: 'sqlite',
            database: 'database.sqlite',
            synchronize: true,
            logging: process.env.NODE_ENV === 'development',
            entities: [path.resolve(__dirname, '..', 'entities', '*.ts')],
        }).catch(e => {
            throw new Error(e);
        });
    });
}
//# sourceMappingURL=createDatabaseConnection.js.map