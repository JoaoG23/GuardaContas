import { Sequelize } from "sequelize";
import 'dotenv/config';

export const db = new Sequelize('db_guardacontas', 'postgres', 'admin', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
});