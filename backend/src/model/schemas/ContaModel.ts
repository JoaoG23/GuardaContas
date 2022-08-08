import { Sequelize, DataTypes } from "sequelize";
import { db } from "../database";

const ContaModel = db.define('contas',
  {
    // - Tipo
    // - login
    // - Senha
    // - Instituicao
    // - Obs

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    login: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    instituicao: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    obs: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
    },
  },
  {
    freezeTableName:true,
    tableName:'contas'
  }
);

export default ContaModel;
