"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
const ContaModel = database_1.db.define('contas', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    login: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    senha: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    instituicao: {
        type: sequelize_1.DataTypes.STRING(70),
        allowNull: false,
    },
    obs: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
        defaultValue: "",
    },
}, {
    freezeTableName: true,
    tableName: 'contas'
});
exports.default = ContaModel;
