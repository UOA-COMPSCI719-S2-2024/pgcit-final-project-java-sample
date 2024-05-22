import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import fs from 'fs';

const DB_FILEPATH = 'database.db';
const DB_DDL_FILEPATH = 'src/sql/db-init.sql';

let db = null;

async function createDBConnection() {
  const shouldRunInit = !fs.existsSync(DB_FILEPATH);
  const db = await sqlite.open({
    filename: DB_FILEPATH,
    driver: sqlite3.Database,
  });
  if (shouldRunInit) {
    const SQL_DDL = fs.readFileSync(DB_DDL_FILEPATH, 'utf8');
    await db.exec(SQL_DDL);
  }

  return db;
}

export async function getDatabase() {
  if (db) return db;
  db = createDBConnection();
  return db;
}

export default getDatabase;
