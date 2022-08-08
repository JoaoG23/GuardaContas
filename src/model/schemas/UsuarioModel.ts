import { Sequelize, DataTypes } from "sequelize";
import { db } from "../database";

const UsuarioModel = db.define('usuarios',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate:{
        notEmpty: true
      } 
    },
    usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        min:4,
        notEmpty: true
      }
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate:{
        notEmpty: true
      } 
    },
    telefone: {
      type: DataTypes.STRING(70),
      allowNull: false,
      validate:{
        notEmpty: true
      } 
    },
    autorizado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false,
    },
    fullAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false,
    },
  },
  {
    freezeTableName:true,
    tableName:'usuarios'
  }
);

export default UsuarioModel;
