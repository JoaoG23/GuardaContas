import { DataTypes } from "sequelize";
import { db } from "../database";

const UsuarioModel = db.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "",
    },
    usuario: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,
      defaultValue: "",
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    telefone: {
      type: DataTypes.STRING(17),
      allowNull: false,
      unique: true,
      defaultValue: "",
    },
    autorizado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    fullAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    freezeTableName: true,
    tableName: "usuarios",
  }
);

export default UsuarioModel;
