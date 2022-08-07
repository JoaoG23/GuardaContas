"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
require("dotenv/config");
exports.db = new sequelize_1.Sequelize('db_guardacontas', 'postgres', 'admin', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
});
