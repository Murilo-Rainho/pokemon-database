"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPokeMoviments1646164784916 = void 0;
const typeorm_1 = require("typeorm");
// there are two ways to create a foreign key
class createPokeMoviments1646164784916 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'movements',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'movement',
                        type: 'varchar(50)',
                    },
                    {
                        name: 'power',
                        type: 'tinyint'
                    },
                    {
                        name: 'description',
                        type: 'text',
                    },
                    {
                        name: 'type_id',
                        type: 'varchar'
                    }
                ],
                // way One to create a fk:
                // foreignKeys: [
                // 	{
                // 		name: 'fk_type_movement',
                // 		columnNames: ['type_id'],
                // 		referencedTableName: 'types',
                // 		referencedColumnNames: ['id'],
                // 	}
                // ],
            }));
            // way Two to create a fk:
            yield queryRunner.createForeignKey('movements', new typeorm_1.TableForeignKey({
                columnNames: ['type_id'],
                referencedTableName: 'types',
                referencedColumnNames: ['id'],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('movements');
        });
    }
}
exports.createPokeMoviments1646164784916 = createPokeMoviments1646164784916;
