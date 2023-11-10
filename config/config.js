import dotenv from "dotenv";
import { fileURLToPath, dirname } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dotenvPath = path.join(__dirname, '.env')

dotenv.config({ path: dotenvPath });

const sequelizeConfig = {
  "development": {
    "url": process.env.DEV_DB_URL,
    "dialect": "postgres"
  },
  "test": {
    "url": process.env.DEV_DB_URL,
    "dialect": "postgres"
  },
  "production": {
    "url": process.env.DEV_DB_URL,
    "dialect": "postgres"
  }
}

export { sequelizeConfig }